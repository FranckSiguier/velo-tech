import { db } from "./db";
import { sampleCategories } from "./samples/category";
import { sampleTestimonials } from "./samples/testimonials";
import { brand, category, testimonial } from "./schema";

async function seedTestimonials() {
  try {
    console.log("🌱 Seeding testimonials...");

    // Check if testimonials already exist
    const existingTestimonials = await db.select().from(testimonial);

    if (existingTestimonials.length > 0) {
      console.log("⚠️  Testimonials already exist, skipping seed");
      return;
    }

    // Insert sample testimonials
    await db.insert(testimonial).values(sampleTestimonials);

    console.log("✅ Successfully seeded testimonials!");
    console.log(`📊 Inserted ${sampleTestimonials.length} testimonials`);
  } catch (error) {
    console.error("❌ Error seeding testimonials:", error);
    throw error;
  }
}

async function seedCategoriesAndBrands() {
  try {
    console.log("🌱 Seeding categories...");

    const existingCategories = await db.select().from(category);

    if (existingCategories.length > 0) {
      console.log("⚠️  Categories already exist, skipping seed");
      return;
    }

    await db.insert(category).values(
      sampleCategories.map((category, index) => ({
        id: index.toString(),
        name: category.name,
        description: category.description,
        items: category.items,
      }))
    );

    console.log("✅ Successfully seeded categories!");
    console.log(`📊 Inserted ${sampleCategories.length} categories`);
  } catch (error) {
    console.error("❌ Error seeding categories:", error);
    throw error;
  }
}

async function seedBrands() {
  try {
    console.log("🌱 Seeding products...");

    const existingBrands = await db.select().from(brand);

    if (existingBrands.length > 0) {
      console.log("⚠️  Brands already exist, skipping seed");
      return;
    }

    await db.insert(brand).values(
      sampleCategories.flatMap((category, index) =>
        category.brands.map((brand) => ({
          id: `${index}-${brand.name}`,
          name: brand.name,
          description: brand.description,
          categoryId: index.toString(),
          imageUrl: brand.imageUrl,
          tags: brand.tags,
        }))
      )
    );

    console.log("✅ Successfully seeded brands!");
    console.log(
      `📊 Inserted ${sampleCategories.flatMap((c) => c.brands.length).reduce((a, b) => a + b, 0)} brands`
    );
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    throw error;
  }
}

const seedDatabase = async () => {
  await seedTestimonials();
  await seedCategoriesAndBrands();
  await seedBrands();
};

if (require.main === module) {
  seedDatabase();
}

export { seedDatabase };
