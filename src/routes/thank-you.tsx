import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const Route = createFileRoute("/thank-you")({
  component: ThankYou,
});

function ThankYou() {
  const [countdown, setCountdown] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate({ to: "/" });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const businessHours = [
    { day: "Monday, Wednesday, Friday", hours: "8:30 AM - 5:00 PM" },
    { day: "Tuesday, Thursday", hours: "7:30 AM - 6:00 PM" },
    { day: "Saturday, Sunday", hours: "Closed" },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Success Message */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/20 rounded-full mb-8">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Thank <span className="text-primary">You!</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Your message has been sent successfully. We'll get back to you
            within 24 hours during business hours.
          </p>
          <Badge variant="secondary" className="text-sm">
            Redirecting to home page in {countdown} seconds...
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* What Happens Next */}
          <Card className="border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                What Happens Next?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    We'll Review Your Request
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Our team will review your message and service requirements
                    within a few hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    We'll Contact You
                  </h4>
                  <p className="text-gray-400 text-sm">
                    We'll reach out via email or phone to confirm details and
                    schedule your appointment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Book Your Service
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Once confirmed, we'll book you in for your service at a time
                    that works for you.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">
                  Need to Contact Us?
                </CardTitle>
                <p className="text-gray-400">
                  You can also reach us directly for urgent matters
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-white">(02) 7901 3243</p>
                    <p className="text-sm text-gray-400">
                      Call for immediate assistance
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-white">
                      chris@velotechcentre.com.au
                    </p>
                    <p className="text-sm text-gray-400">
                      Email for general inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-white">Visit Our Shop</p>
                    <p className="text-sm text-gray-400">
                      Shop 7/22-28 Macpherson St, Bronte NSW 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-400">{schedule.day}</span>
                      <span className="font-medium text-white">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Follow Our Work</CardTitle>
                <p className="text-gray-400">
                  See our latest projects and cycling tips
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-gray-700 text-gray-400 hover:bg-gray-800 bg-transparent"
                  >
                    <a
                      href="https://www.facebook.com/velotechcentre/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Facebook className="w-5 h-5" />
                      Facebook
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-gray-700 text-gray-400 hover:bg-gray-800 bg-transparent"
                  >
                    <a
                      href="https://www.instagram.com/velotechcentre/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-16 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate({ to: "/" })}
              size="lg"
              className="bg-primary hover:bg-primary-400 text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button
              onClick={() => navigate({ to: "/services" })}
              variant="outline"
              size="lg"
              className="border-gray-700 text-gray-400 hover:bg-gray-800 bg-transparent"
            >
              View Our Services
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            You can also browse our services while you wait for our response
          </p>
        </div>
      </div>
    </div>
  );
}
