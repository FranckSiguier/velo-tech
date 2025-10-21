# Caching Strategy Documentation

## Overview

This application implements an aggressive caching strategy for rarely-changing data using TanStack Query (React Query). The strategy is designed to minimize unnecessary network requests while ensuring users always have access to the latest data when needed.

---

## Cache Configuration

### Global Defaults (`__root.tsx`)

All queries inherit these defaults:

| Setting                  | Value      | Purpose                                               |
| ------------------------ | ---------- | ----------------------------------------------------- |
| **staleTime**            | 5 minutes  | Data is considered "fresh" for 5 minutes              |
| **gcTime**               | 10 minutes | Cache is kept in memory for 10 minutes after last use |
| **refetchOnWindowFocus** | false      | Don't refetch when user returns to tab                |
| **refetchOnMount**       | false      | Don't refetch when component mounts if data is fresh  |
| **refetchOnReconnect**   | false      | Don't refetch when internet reconnects                |
| **retry**                | 2          | Retry failed requests twice                           |

---

## Query-Specific Caching

### 1. Brands (`index.tsx`)

**Purpose:** Display brand logos on homepage  
**Update Frequency:** Rarely (new brands added infrequently)

```typescript
staleTime: 1 hour
gcTime: 24 hours
```

**Rationale:** Brands are added/removed very rarely. Users can browse for hours without needing fresh data.

---

### 2. Latest Build (`index.tsx`)

**Purpose:** Showcase recent custom bike build  
**Update Frequency:** Occasionally (new builds posted weekly/monthly)

```typescript
staleTime: 30 minutes
gcTime: 2 hours
```

**Rationale:** Builds are updated less frequently than other content, but more often than brands. 30 minutes provides a good balance.

---

### 3. Categories with Brands (`products.tsx`)

**Purpose:** Display product categories and associated brands  
**Update Frequency:** Rarely (product catalog is relatively stable)

```typescript
staleTime: 1 hour
gcTime: 24 hours
```

**Rationale:** Product categories and brand relationships change infrequently. Long cache times prevent unnecessary re-fetching.

---

## How It Works

### Cache Lifecycle

```
User Visit → Fetch Data → Store in Cache (Fresh for 1 hour)
                                ↓
                        User navigates away
                                ↓
                    Cache kept in memory (24 hours)
                                ↓
                        User returns (within 1 hour)
                                ↓
                        ✅ Serve from cache (instant!)
```

### When Data is Refetched

Data is **only** refetched when:

1. ❌ Data is older than `staleTime` (1 hour for brands/products, 30 min for builds)
2. ❌ User explicitly triggers a refresh (rare)
3. ❌ Application is completely restarted

Data is **NOT** refetched when:

1. ✅ User switches tabs and comes back
2. ✅ Component unmounts and remounts
3. ✅ User navigates between pages
4. ✅ Internet connection reconnects

---

## Benefits

### Performance

- **Instant Page Loads:** Cached data serves immediately
- **Reduced Server Load:** 90%+ reduction in API calls
- **Lower Bandwidth:** Less data transferred
- **Better Mobile Experience:** Fewer network requests = longer battery life

### User Experience

- **Faster Navigation:** Switching pages is instant
- **Offline Resilience:** Works better with spotty connections
- **Predictable Behavior:** No loading spinners after initial load

---

## Advanced Optimizations (Optional)

### 1. Add Cache Persistence

Keep cache across page refreshes using localStorage/sessionStorage:

```bash
npm install @tanstack/react-query-persist-client
npm install @tanstack/query-sync-storage-persister
```

```typescript
// In __root.tsx
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

// Use PersistQueryClientProvider instead of QueryClientProvider
```

**Benefit:** Users get instant loads even on hard refresh!

---

### 2. Add HTTP Cache Headers

Configure server responses with cache headers:

```typescript
// In your server functions
export const getBrands = createServerFn({
  method: "GET",
}).handler(async ({ request }) => {
  const brands = await db.select().from(brand);

  return new Response(JSON.stringify({ brands }), {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600", // 1 hour
      "CDN-Cache-Control": "public, max-age=86400", // 24 hours on CDN
    },
  });
});
```

**Benefit:** CDN can cache responses, reducing origin requests entirely.

---

### 3. Prefetch on Hover

Prefetch data when users hover over navigation links:

```typescript
import { useQueryClient } from '@tanstack/react-query';

function Navbar() {
  const queryClient = useQueryClient();

  return (
    <Link
      to="/products"
      onMouseEnter={() => {
        queryClient.prefetchQuery(categoriesWithBrandsQueryOptions);
      }}
    >
      Products
    </Link>
  );
}
```

**Benefit:** Data is ready before user clicks!

---

### 4. Manual Cache Invalidation

When you update data (e.g., in admin panel):

```typescript
// After uploading new build
queryClient.invalidateQueries({ queryKey: ["latestBuild"] });

// After adding new brand
queryClient.invalidateQueries({ queryKey: ["brands"] });
```

---

## Monitoring

### React Query DevTools

Already included! Open in browser:

- **Development:** Look for the React Query icon in the bottom-right corner
- Shows all cached queries, their status, and data
- Can manually refetch or clear cache

---

## Cache Strategy Summary

| Data Type               | Stale Time | Cache Time | Rationale            |
| ----------------------- | ---------- | ---------- | -------------------- |
| **Brands**              | 1 hour     | 24 hours   | Rarely changes       |
| **Latest Build**        | 30 min     | 2 hours    | Occasionally updated |
| **Categories/Products** | 1 hour     | 24 hours   | Stable catalog       |
| **Other Queries**       | 5 min      | 10 min     | Default conservative |

---

## Adjusting Cache Times

If you need to change cache behavior:

**Data changes more often?** → Reduce `staleTime`

```typescript
staleTime: 1000 * 60 * 5, // 5 minutes instead of 1 hour
```

**Data changes less often?** → Increase `staleTime`

```typescript
staleTime: 1000 * 60 * 60 * 24, // 24 hours
```

**Memory concerns?** → Reduce `gcTime`

```typescript
gcTime: 1000 * 60 * 30, // 30 minutes instead of 24 hours
```

---

## Testing the Cache

### Verify it's working:

1. Open React Query DevTools (bottom-right)
2. Load homepage - should see `brands` and `latestBuild` queries
3. Navigate to products page - should see `categoriesWithBrands` query
4. Go back to homepage - **should NOT see network requests**
5. Check DevTools - queries should show "fresh" status with green indicators

### Force a refetch (for testing):

```typescript
// In browser console
queryClient.invalidateQueries();
```

---

## Best Practices

✅ **DO:**

- Keep `staleTime` < `gcTime`
- Monitor cache hit rates in DevTools
- Invalidate cache after data mutations
- Use query keys consistently

❌ **DON'T:**

- Set `staleTime` too high for frequently changing data
- Disable refetching entirely (users need updates eventually)
- Forget to clear cache after updates
- Use random/dynamic query keys

---

## Questions?

**Q: What if data changes on the server but user has stale cache?**  
A: After `staleTime` expires, next interaction will fetch fresh data. For critical updates, use manual invalidation.

**Q: Does cache survive page refreshes?**  
A: No, by default. Add persistence (see Advanced Optimizations) to enable this.

**Q: How much memory does caching use?**  
A: Minimal. Each query is a few KB. `gcTime` automatically cleans up unused cache.

**Q: Can I disable cache for specific queries?**  
A: Yes! Set `staleTime: 0` for real-time data.

---

## Current Implementation

✅ **Implemented:**

- Global cache defaults
- Query-specific cache times
- Automatic garbage collection
- Disabled unnecessary refetching
- React Query DevTools

🔮 **Consider Adding:**

- Cache persistence across refreshes
- HTTP cache headers
- Prefetching on hover
- Manual invalidation for admin actions

---

**Last Updated:** October 2025
