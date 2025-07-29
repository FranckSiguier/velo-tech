import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Wrench, Users, Award } from "lucide-react";
import InstagramCarousel from "~/components/instagram-carousel";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const brandLogos = [
    { name: "Factor", logo: "/brands/factor-logo.png" },
    { name: "Time", logo: "/brands/time-new-logo.jpeg" },
    { name: "Colnago", logo: "/brands/colnago-logo.png" },
    { name: "Aurum", logo: "/brands/aurum-logo.webp" },
    { name: "Shimano", logo: "/brands/shimano.webp" },
    { name: "SRAM", logo: "/brands/sram.jpeg" },
    { name: "Campagnolo", logo: "/brands/campagnolo.jpeg" },
    { name: "Magene", logo: "/brands/magene.png" },
    { name: "Kask", logo: "/brands/kask.png" },
    { name: "Continental", logo: "/brands/continental.png" },
    { name: "Pirelli", logo: "/brands/pirelli.png" },
    { name: "Repente", logo: "/brands/repente-logo.webp" },
    { name: "100%", logo: "/brands/100percent-new-logo.webp" },
    { name: "Koo", logo: "/brands/koo-logo.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-secondary-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              Welcome to{" "}
              <span className="text-primary animate-pulse">
                Velo Tech Centre
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Your trusted partner for professional bike services, quality
              parts, and expert advice in Bronte, NSW
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-400 text-gray-900 glow-primary"
              >
                <Link to="/services">Our Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-gray-900 bg-transparent"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Showcase */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white font-display">
              Inside Our Workshop
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take a look inside our professional workshop where passion meets
              precision
            </p>
          </div>

          {/* Main Workshop Image */}
          <div className="mb-12">
            <Card className="overflow-hidden border-gray-700 bg-gray-800">
              <CardContent className="p-0">
                <img
                  src="/shop/workshop.jpg"
                  alt="Velo Tech Centre Workshop Interior"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white font-display">
                    Our Professional Workshop
                  </h3>
                  <p className="text-gray-400">
                    Equipped with the latest tools and technology to service
                    everything from vintage classics to the latest high-tech
                    machines
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Showcase Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-gray-700 bg-gray-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src="/shop/wheels.jpg"
                  alt="Wall of Premium Saddles, Wheels and Tyres"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-white font-display">
                    Premium Components
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Our wall of premium saddles, carbon wheels, and
                    high-performance tyres from top brands
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-gray-700 bg-gray-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src="/shop/tyres.jpg"
                  alt="Cycling Accessories and Compounds Display"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-white font-display">
                    Accessories & Care
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Professional compounds, tools, nutrition, and accessories to
                    keep you riding at your best
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-gray-700 bg-gray-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src="/shop/tools.jpg"
                  alt="Recent Custom Bike Build"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-white font-display">
                    Custom Builds
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Latest custom build featuring premium components and expert
                    craftsmanship
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Carousel Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white font-display">
              Latest from Our Workshop
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Follow our journey on Instagram to see the latest bikes we're
              working on, new arrivals, and behind-the-scenes moments at Velo
              Tech Centre.
            </p>
          </div>
          <InstagramCarousel />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white font-display">
              What We Do Best
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From basic tune-ups to complete overhauls, we provide
              comprehensive bike services to keep you riding smoothly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 bg-gray-900 border-gray-700 hover:border-primary/50 hover:glow-primary">
              <CardContent className="p-8">
                <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white font-display">
                  Expert Repairs
                </h3>
                <p className="text-gray-400 mb-4">
                  Professional bike repairs and maintenance by certified
                  technicians
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-primary hover:text-gray-900 hover:border-primary bg-transparent"
                >
                  <Link to="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 bg-gray-900 border-gray-700 hover:border-primary/50 hover:glow-primary">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white font-display">
                  Custom Builds
                </h3>
                <p className="text-gray-400 mb-4">
                  Personalized bike builds tailored to your riding style and
                  preferences
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-primary hover:text-gray-900 hover:border-primary bg-transparent"
                >
                  <Link to="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 bg-gray-900 border-gray-700 hover:border-primary/50 hover:glow-primary">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white font-display">
                  Premium Products
                </h3>
                <p className="text-gray-400 mb-4">
                  Premium bike components and accessories from trusted brands
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-primary hover:text-gray-900 hover:border-primary bg-transparent"
                >
                  <Link to="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white font-display">
              Trusted Brands We Work With
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We partner with the world's leading cycling brands to provide you
              with the best products and service
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {brandLogos.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-display">
            Ready to Get Your Bike Serviced?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Book an appointment today or visit our shop in Bronte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-400 text-gray-900 glow-primary"
            >
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-gray-900 bg-transparent"
            >
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
