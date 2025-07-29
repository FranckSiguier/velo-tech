import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ArrowRight, ExternalLink, Link, Star } from "lucide-react";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/products")({
  component: Products,
});

function Products() {
  const brands = [
    {
      name: "Factor",
      category: "Complete Bikes",
      description:
        "Premium carbon fiber bikes engineered for performance and aerodynamics",
      specialties: ["Road Bikes", "Time Trial", "Gravel Bikes", "E-Bikes"],
      image: "/brands/factor-logo.png",
    },
    {
      name: "Time",
      category: "Complete Bikes",
      description:
        "French engineering excellence with innovative frame designs and technology",
      specialties: ["Road Racing", "Triathlon", "Gravel", "Custom Builds"],
      image: "/brands/time-new-logo.jpeg",
    },
    {
      name: "Colnago",
      category: "Complete Bikes",
      description: "Italian craftsmanship and racing heritage since 1952",
      specialties: [
        "Racing Bikes",
        "Classic Steel",
        "Carbon Frames",
        "Custom Paint",
      ],
      image: "/brands/colnago-logo.png",
    },
    {
      name: "Aurum",
      category: "Complete Bikes",
      description:
        "High-performance bikes with cutting-edge technology and design",
      specialties: [
        "Performance Road",
        "Aero Bikes",
        "Climbing Bikes",
        "All-Road",
      ],
      image: "/brands/aurum-logo.webp",
    },
    {
      name: "Shimano",
      category: "Groupsets & Components",
      description: "World-leading bicycle components and drivetrain systems",
      specialties: ["Dura-Ace", "Ultegra", "105", "Di2 Electronic"],
      image: "/brands/shimano.webp",
    },
    {
      name: "SRAM",
      category: "Groupsets & Components",
      description:
        "Innovative drivetrain solutions and wireless shifting technology",
      specialties: ["Red AXS", "Force AXS", "Rival AXS", "1x Drivetrains"],
      image: "/brands/sram.jpeg",
    },
    {
      name: "Campagnolo",
      category: "Groupsets & Components",
      description: "Italian precision engineering and racing heritage",
      specialties: ["Super Record", "Record", "Chorus", "Centaur"],
      image: "/brands/campagnolo.jpeg",
    },
    {
      name: "Magene",
      category: "Groupsets & Wheels",
      description:
        "Advanced cycling technology including power meters and carbon wheels",
      specialties: [
        "Power Meters",
        "Carbon Wheels",
        "Training Devices",
        "Bike Computers",
      ],
      image: "/brands/magene.png",
    },
    {
      name: "Repente",
      category: "Saddles",
      description:
        "Italian-made performance saddles with innovative design and comfort",
      specialties: [
        "Racing Saddles",
        "Comfort Saddles",
        "Women's Specific",
        "Custom Fit",
      ],
      image: "/brands/repente-logo.webp",
    },
    {
      name: "Kask",
      category: "Helmets",
      description:
        "Premium Italian helmets combining safety, comfort, and aerodynamics",
      specialties: [
        "Road Helmets",
        "Aero Helmets",
        "Mountain Bike",
        "Safety Technology",
      ],
      image: "/brands/kask.png",
    },
    {
      name: "Continental",
      category: "Tyres",
      description: "German engineering excellence in bicycle tire technology",
      specialties: ["Road Tyres", "Tubeless", "Racing", "All-Weather"],
      image: "/brands/continental.png",
    },
    {
      name: "Pirelli",
      category: "Tyres",
      description: "Racing heritage and performance tire technology",
      specialties: [
        "P Zero Race",
        "Cinturato",
        "Racing Tyres",
        "Tubeless Ready",
      ],
      image: "/brands/pirelli.png",
    },
    {
      name: "100%",
      category: "Sunglasses",
      description: "Performance eyewear designed for professional cycling",
      specialties: [
        "Racing Glasses",
        "Photochromic",
        "Interchangeable Lenses",
        "Lightweight",
      ],
      image: "/brands/100percent-new-logo.webp",
    },
    {
      name: "Koo",
      category: "Sunglasses",
      description:
        "Italian-designed performance eyewear with advanced lens technology",
      specialties: [
        "Cycling Glasses",
        "Zeiss Lenses",
        "Anti-Fog",
        "UV Protection",
      ],
      image: "/brands/koo-logo.jpeg",
    },
  ];

  const categories = [
    {
      title: "Complete Bikes",
      description: "Premium bicycles from world-renowned manufacturers",
      items: [
        "Factor",
        "Time",
        "Colnago",
        "Aurum",
        "Custom Builds",
        "Saddle Fitting",
      ],
      brands: ["Factor", "Time", "Colnago", "Aurum"],
    },
    {
      title: "Groupsets & Components",
      description: "High-performance drivetrain systems and components",
      items: [
        "Electronic Shifting",
        "Mechanical Groups",
        "Power Meters",
        "Brake Systems",
      ],
      brands: ["Shimano", "SRAM", "Campagnolo", "Magene"],
    },
    {
      title: "Wheels & Tyres",
      description: "Carbon wheels and premium tire technology",
      items: [
        "Carbon Wheelsets",
        "Racing Tyres",
        "Tubeless Systems",
        "Custom Builds",
      ],
      brands: ["Magene", "Continental", "Pirelli"],
    },
    {
      title: "Accessories & Gear",
      description: "Essential cycling accessories and performance gear",
      items: [
        "Helmets",
        "Sunglasses",
        "Saddles",
        "Tools",
        "Nutrition",
        "Compounds",
      ],
      brands: ["Kask", "100%", "Koo", "Repente"],
    },
  ];

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

        {/* Featured Brands */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white font-display">
            Our Brands
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-gray-700 bg-gray-800"
              >
                <CardHeader>
                  <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img
                      src={brand.image || "/placeholder.svg"}
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
                      {brand.category}
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
                      {brand.specialties.map((specialty, specialtyIndex) => (
                        <Badge
                          key={specialtyIndex}
                          variant="secondary"
                          className="text-xs bg-gray-700 text-gray-300 border-gray-600"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white font-display">
            Product Categories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-gray-700 bg-gray-800"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-white font-display">
                    {category.title}
                  </CardTitle>
                  <p className="text-gray-400">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-white">
                      Available Products:
                    </h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-2"
                        >
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
                          {brand}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

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
