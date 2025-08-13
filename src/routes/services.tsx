import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  CheckCircle,
  Wrench,
  Shield,
  Settings,
  Award,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Rim Brake General Service",
      price: "$190",
      duration: "2-3 hours",
      description:
        "Comprehensive maintenance to keep your bike running smoothly",
      features: [
        "Clean bike and check for damage",
        "Degrease drive train",
        "Align brakes",
        "Tune gears",
        "True wheels",
        "Check tyres for damage",
        "Check headset tension",
        "Check all bolt tension",
        "Re-lube drive train",
      ],
    },
    {
      icon: Shield,
      title: "Disc Brake General Service",
      price: "$230",
      duration: "2-4 hours",
      description: "Complete service including disc brake maintenance",
      features: [
        "Clean bike and check for damage",
        "Degrease drive train",
        "Remove brake pads and check condition",
        "Align brakes",
        "Tune gears",
        "True wheels",
        "Clean brake rotors",
        "Check tyres for damage",
        "Complete minor brake bleed on both brakes",
        "Check headset tension",
        "Check all bolt tension",
        "Re-lube drive train",
      ],
    },
    {
      icon: Settings,
      title: "Premium Service",
      price: "$264",
      duration: "3-5 hours",
      description:
        "Advanced service with cable replacement and component updates",
      features: [
        "Clean bike and check for damage",
        "Degrease drive train",
        "Replace gear and brake cables (standard cables included)",
        "Update Di2 firmware",
        "Bleed brakes",
        "Align brakes",
        "Tune gears",
        "True wheels",
        "Check tyres for damage",
        "Service headset",
        "Service bottom bracket",
        "Install new bar tape (excludes cost of new bar tape)",
        "Check all bolt tension",
        "Re-lube drive train",
      ],
    },
    {
      icon: Award,
      title: "Ultimate Service",
      price: "$420",
      duration: "1-2 days",
      description: "Complete bike rebuild with full component service",
      features: [
        "Clean frame and fork, check for damage",
        "Remove every component from bike, clean and service",
        "Replace gear and brake cables (standard cables included)",
        "Bleed brakes",
        "Update Di2 firmware",
        "True wheels",
        "Check tyres for damage",
        "Service wheel hubs",
        "Fully rebuild bike",
        "Install new bar tape (excludes cost of new bar tape)",
        "Re-lube drive train",
      ],
    },
    {
      icon: Zap,
      title: "Bike Clean",
      price: "$45",
      duration: "30-60 minutes",
      description: "Quick clean and basic maintenance",
      features: [
        "Clean bike and check for damage",
        "Degrease drive train",
        "Re-lube drive train",
      ],
    },
    {
      icon: Users,
      title: "Custom Bike Builds",
      price: "Quote on request",
      duration: "1-2 weeks",
      description:
        "Complete custom bike builds tailored to your specifications",
      features: [
        "Personal consultation and component selection",
        "Professional assembly and setup",
        "Quality testing and adjustments",
        "Comprehensive warranty on workmanship",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Complete Wheel Builds",
      price: "Quote on request",
      description: "Professional wheel building and hub services",
      features: [
        "Hub Services",
        "Bearing Replacements and Upgrades",
        "Spoke and Nipple Replacements (excludes cost of new spokes and nipples)",
        "Rim Replacements and Upgrades (excludes cost of new rims)",
      ],
    },
    {
      title: "Upgrades",
      price: "Quote on request",
      description: "Advanced component upgrades and installations",
      features: [
        "Di2 – EPS – Sram AXS Upgrades",
        "Handle Bar / Frame Battery Charge Port Upgrades",
        "Power Meter Installations",
        "Bottom Bracket and Headset Bearing Installations",
        "Component Changes",
      ],
    },
    {
      title: "General Maintenance",
      price: "Quote on request",
      description: "Individual maintenance tasks and repairs",
      features: [
        "Tyre Changes",
        "Brake pad Changes",
        "Hydraulic Brake Bleeds",
        "Chain Replacement",
        "Cable and Hose Replacement",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">
            <span className="text-primary">Our</span> Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From basic maintenance to complete custom builds, our certified
            technicians provide expert service for all types of bicycles. We use
            only quality parts and stand behind our work with comprehensive
            warranties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow h-full bg-gray-800 border-gray-700"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                    <Badge
                      variant="outline"
                      className="border-gray-700 text-gray-400"
                    >
                      {service.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 text-white">
                    {service.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {service.price}
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white font-display">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow h-full bg-gray-800 border-gray-700"
              >
                <CardHeader>
                  <CardTitle className="text-xl mb-2 text-white">
                    {service.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {service.price}
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-white">
                Service Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                We stand behind our work with a comprehensive warranty on all
                services. If you're not completely satisfied with our work,
                we'll make it right.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-gray-400">
                    30-day service warranty
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-gray-400">
                    Quality parts guarantee
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-gray-400">
                    Free follow-up adjustments
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-white">
                Booking Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Ready to book a service? Contact us to schedule an appointment
                or get a quote for your specific needs.
              </p>
              <div className="space-y-3">
                <div className="text-sm text-gray-400">
                  <strong>Phone:</strong> (02) 7901 3243
                </div>
                <div className="text-sm text-gray-400">
                  <strong>Email:</strong> chris@velotechcentre.com.au
                </div>
                <div className="text-sm text-gray-400">
                  <strong>Hours:</strong> Mon/Wed/Fri: 8:30AM-5PM, Tue/Thu:
                  7:30AM-6PM, Weekends: Closed
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center bg-accent/10 rounded-lg p-8 border border-accent/20">
          <h2 className="text-2xl font-bold mb-4 text-white font-display">
            Ready to Book Your Service?
          </h2>
          <p className="text-gray-400 mb-6">
            Get in touch with us today to schedule your bike service or ask any
            questions
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-400 text-gray-900"
          >
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
