import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { Suspense } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { getCategoriesWithBrands } from "~/functions/getCategories";

export const Route = createFileRoute("/products")({
  component: Products,
  loader: async () => await getCategoriesWithBrands(),
});

// Loading component for Suspense fallback
function ProductsLoading() {
  return (
    <>
      {/* Loading skeleton for brands */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-700 rounded animate-pulse mb-2 mx-auto w-48"></div>
          <div className="h-4 bg-gray-700 rounded animate-pulse mx-auto w-64"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-gray-700 bg-gray-800"
            >
              <CardHeader>
                <div className="bg-gray-700 rounded-lg p-4 mb-4 flex items-center justify-center h-48 animate-pulse">
                  <div className="w-32 h-24 bg-gray-600 rounded"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="h-6 bg-gray-700 rounded animate-pulse w-24"></div>
                  <div className="h-5 bg-gray-700 rounded animate-pulse w-16"></div>
                </div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="h-4 bg-gray-700 rounded animate-pulse w-20 mb-2"></div>
                  <div className="flex flex-wrap gap-2">
                    {[...Array(3)].map((_, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="h-5 bg-gray-700 rounded animate-pulse w-16"
                      ></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Loading skeleton for product categories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white font-display">
          Product Categories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-gray-700 bg-gray-800"
            >
              <CardHeader>
                <div className="h-6 bg-gray-700 rounded animate-pulse w-32 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="h-4 bg-gray-700 rounded animate-pulse w-24 mb-2"></div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[...Array(4)].map((_, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="h-3 bg-gray-700 rounded animate-pulse w-16"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="h-4 bg-gray-700 rounded animate-pulse w-24 mb-2"></div>
                  <div className="flex flex-wrap gap-2">
                    {[...Array(3)].map((_, brandIndex) => (
                      <div
                        key={brandIndex}
                        className="h-5 bg-gray-700 rounded animate-pulse w-12"
                      ></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

// Main products content component
function ProductsContent() {
  const { categoriesWithBrands } = Route.useLoaderData();

  return (
    <>
      {/* Brands by Category */}
      <div className="mb-16">
        {categoriesWithBrands.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white font-display mb-2">
                {category.name}
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.brands.map((brand, brandIndex) => (
                <Card
                  key={brandIndex}
                  className="hover:shadow-lg transition-shadow border-gray-700 bg-gray-800"
                >
                  <CardHeader>
                    <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                      <img
                        src={brand.imageUrl || "/placeholder.svg"}
                        alt={`${brand.name} products`}
                        width={300}
                        height={200}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-white font-display">
                        {brand.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="border-gray-600 text-gray-400"
                      >
                        {category.name}
                      </Badge>
                    </div>
                    <p className="text-gray-400">{brand.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-white">
                        Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {brand.tags?.split(",").map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs bg-gray-700 text-gray-300 border-gray-600"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Product Categories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white font-display">
          Product Categories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {categoriesWithBrands.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-gray-700 bg-gray-800"
            >
              <CardHeader>
                <CardTitle className="text-xl text-white font-display">
                  {category.name}
                </CardTitle>
                <p className="text-gray-400">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-white">
                    Available Products:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {category.items?.split(",").map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <Star className="w-3 h-3 text-primary" />
                        <span className="text-sm text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    Featured Brands:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.brands.map((brand, brandIndex) => (
                      <Badge
                        key={brandIndex}
                        className="text-xs bg-primary/20 text-primary border-primary/30"
                      >
                        {brand.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

function Products() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">
            <span className="text-primary">Our</span> Products
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We carry a carefully curated selection of premium bikes, components,
            and accessories from the world's most respected brands. From
            professional racing equipment to everyday cycling essentials, we
            have what you need to elevate your riding experience.
          </p>
        </div>
        <Suspense fallback={<ProductsLoading />}>
          <ProductsContent />
        </Suspense>
        {/* Additional Products */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white font-display">
                Additional Products
              </CardTitle>
              <p className="text-gray-300">
                We also stock a range of essential cycling products
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary font-display">
                    Compounds & Care
                  </h3>
                  <p className="text-sm text-gray-400">
                    Professional bike cleaning products, lubricants, and
                    maintenance compounds
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary font-display">
                    Nutrition
                  </h3>
                  <p className="text-sm text-gray-400">
                    Energy gels, sports drinks, and performance nutrition for
                    training and racing
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary font-display">
                    Tools & Equipment
                  </h3>
                  <p className="text-sm text-gray-400">
                    Professional-grade tools, pumps, and equipment for home
                    maintenance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Special Services */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8 mb-16 border border-gray-700">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 font-display">
              Specialized Services
            </h2>
            <p className="text-xl mb-6 text-gray-300">
              Expert services for our premium product customers
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold mb-2 text-primary font-display">
                  Custom Bike Builds
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Complete custom builds using premium frames and components
                  tailored to your specifications
                </p>
                <Badge className="bg-primary/20 text-primary">
                  Consultation Required
                </Badge>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold mb-2 text-primary font-display">
                  Saddle Fitting
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Professional saddle fitting and geometry consultation to
                  optimize comfort and performance
                </p>
                <Badge className="bg-primary/20 text-primary">
                  Book Appointment
                </Badge>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold mb-2 text-primary font-display">
                  Geometry Consultation
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  Expert advice on frame geometry and sizing before purchasing
                  your new bike
                </p>
                <Badge className="bg-primary/20 text-primary">
                  Free Consultation
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-white font-display">
            Interested in Our Products?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact us to learn more about our premium brands, check
            availability, or discuss custom build options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-400 text-gray-900"
            >
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
            >
              <Link to="/services">
                View Our Services <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
