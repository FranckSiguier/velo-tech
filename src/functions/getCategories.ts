import { createServerFn } from "@tanstack/react-start";
import { db } from "~/db/db";
import { category } from "~/db/schema";
import { brand } from "~/db/schema";
import { sampleCategories } from "~/db/samples/category";

export const getCategoriesWithBrands = createServerFn({
  method: "GET",
}).handler(async () => {
  const categories = await db.select().from(category);

  const brands = await db.select().from(brand);

  const categoriesWithBrands = categories.map((category) => ({
    ...category,
    brands: brands.filter((brand) => brand.categoryId === category.id),
  }));

  if (categoriesWithBrands.length === 0) {
    return { categoriesWithBrands: sampleCategories };
  }

  return { categoriesWithBrands };
});

export const getBrands = createServerFn({
  method: "GET",
}).handler(async () => {
  const brands = await db.select().from(brand);

  return { brands };
});
