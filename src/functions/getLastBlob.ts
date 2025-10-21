import { getStore } from "@netlify/blobs";
import { createServerFn } from "@tanstack/react-start";
import { BLOB_STORE_NAME } from "~/utils/blobs-utils";

export const getLastBlob = createServerFn({
  method: "GET",
}).handler(async () => {
  const store = getStore({
    name: BLOB_STORE_NAME,
    siteID: process.env.NETLIFY_SITE_ID!,
    token: process.env.NETLIFY_TOKEN!,
    consistency: "strong",
  });
  const blobs = await store.list();
  const allUploads = blobs.blobs.map((blob) => blob.key);
  const latestUpload = allUploads.sort().pop();
  if (!latestUpload) {
    return {
      imageData: null,
      fileName: null,
      metadata: null,
    };
  }

  // Get the blob as a stream and convert it to base64
  const stream = await store.get(latestUpload, {
    type: "stream",
  });

  const metadata = await store.getMetadata(latestUpload);

  // Convert stream to buffer
  const chunks: Uint8Array[] = [];
  const reader = stream.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  // Combine chunks into a single buffer
  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  const buffer = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    buffer.set(chunk, offset);
    offset += chunk.length;
  }

  // Convert to base64
  const base64Image = Buffer.from(buffer).toString("base64");

  return {
    imageData: base64Image,
    fileName: latestUpload,
    metadata: metadata as {
      etag: string | undefined;
      metadata: Record<string, any>;
    } | null,
  };
});
