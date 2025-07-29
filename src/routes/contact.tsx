import {
  CheckCircle,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    email?: string;
    phone?: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [debounceTimers, setDebounceTimers] = useState<{
    email?: NodeJS.Timeout;
    phone?: NodeJS.Timeout;
  }>({});
  const navigate = useNavigate();

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      Object.values(debounceTimers).forEach((timer) => {
        if (timer) clearTimeout(timer);
      });
    };
  }, [debounceTimers]);

  const validateField = (name: string, value: string) => {
    if (name === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }

    if (name === "phone" && value) {
      const phoneRegex = /^(\+61|0)[2-478](?:[ -]?[0-9]){8}$/;
      if (!phoneRegex.test(value.replace(/\s/g, ""))) {
        return "Please enter a valid Australian phone number";
      }
    }

    return undefined;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const error = validateField(e.target.name, e.target.value);
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: error,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: { email?: string; phone?: string } = {};
    const emailError = validateField("email", formFields.email);
    const phoneError = validateField("phone", formFields.phone);

    if (emailError) newErrors.email = emailError;
    if (phoneError) newErrors.phone = phoneError;

    setErrors(newErrors);

    // Don't submit if there are errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitted(true);

    setTimeout(() => {
      navigate({ to: "/thank-you" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });

    // Debounced validation for email and phone
    if (e.target.name === "email" || e.target.name === "phone") {
      // Clear existing timer for this field
      if (debounceTimers[e.target.name as keyof typeof debounceTimers]) {
        clearTimeout(
          debounceTimers[e.target.name as keyof typeof debounceTimers]
        );
      }

      // Set new timer
      const timer = setTimeout(() => {
        const error = validateField(e.target.name, e.target.value);
        setErrors((prev) => ({
          ...prev,
          [e.target.name]: error,
        }));
      }, 2000); // 500ms debounce

      setDebounceTimers((prev) => ({
        ...prev,
        [e.target.name]: timer,
      }));
    }
  };

  const businessHours = [
    { day: "Monday, Wednesday, Friday", hours: "8:30 AM - 5:00 PM" },
    { day: "Tuesday, Thursday", hours: "7:30 AM - 6:00 PM" },
    { day: "Saturday, Sunday", hours: "Closed" },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about our services or need to book an appointment?
            We'd love to hear from you. Visit our shop in Bronte or get in touch
            online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-400">
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    name="contact"
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        Don't fill this out if you're human:{" "}
                        <input name="bot-field" />
                      </label>
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formFields.name}
                          onChange={handleChange}
                          required
                          className="mt-1 border-gray-700 focus:border-primary focus:ring-primary bg-gray-800 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          onBlur={handleBlur}
                          type="email"
                          value={formFields.email}
                          onChange={handleChange}
                          required
                          className={`mt-1 border-gray-700 focus:border-primary focus:ring-primary bg-gray-800 text-white ${
                            errors.email
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : ""
                          }`}
                        />
                        <div className="h-2 mt-1">
                          {errors.email && (
                            <p className="text-sm text-red-400">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-white">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          onBlur={handleBlur}
                          value={formFields.phone}
                          onChange={handleChange}
                          placeholder="e.g., 0412 345 678 or +61 412 345 678"
                          className={`mt-1 border-gray-700 focus:border-primary focus:ring-primary bg-gray-800 text-white ${
                            errors.phone
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : ""
                          }`}
                        />
                        <div className="h-2 mt-1">
                          {errors.phone && (
                            <p className="text-sm text-red-400">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="service" className="text-white">
                          Service Needed
                        </Label>
                        <select
                          id="service"
                          name="service"
                          value={formFields.service}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-gray-800 text-white"
                        >
                          <option value="">Select a service</option>
                          <option value="general-service">
                            General Service - $180
                          </option>
                          <option value="disc-brake-service">
                            Disc Brake General Service - $220
                          </option>
                          <option value="premium-service">
                            Premium Service - $264
                          </option>
                          <option value="ultimate-service">
                            Ultimate Service - $420
                          </option>
                          <option value="bike-clean">Bike Clean - $45</option>
                          <option value="custom-build">
                            Custom Bike Build - Quote on request
                          </option>
                          <option value="wheel-build">
                            Complete Wheel Build - Quote on request
                          </option>
                          <option value="upgrades">
                            Component Upgrades - Quote on request
                          </option>
                          <option value="maintenance">
                            General Maintenance - Quote on request
                          </option>
                          <option value="consultation">
                            General Consultation
                          </option>
                          <option value="other">
                            Other - Please specify in message
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formFields.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1 border-gray-700 focus:border-primary focus:ring-primary bg-gray-800 text-white"
                        placeholder="Tell us about your bike, the issue you're experiencing, or what service you need..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary-400 text-gray-900"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location & Hours */}
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5 text-primary" />
                  Visit Our Shop
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-white">Address</h4>
                  <p className="text-gray-400">
                    Shop 7/22-28 Macpherson St
                    <br />
                    Bronte NSW 2024
                    <br />
                    Australia
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-white">
                    <Clock className="w-4 h-4 text-primary" />
                    Business Hours
                  </h4>
                  <div className="space-y-1">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-400">{schedule.day}</span>
                        <span className="font-medium text-white">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-white">(02) 7901 3243</p>
                    <p className="text-sm text-gray-400">
                      Call for appointments
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-white">
                      chris@velotechcentre.com.au
                    </p>
                    <p className="text-sm text-gray-400">Email us anytime</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Follow Us</CardTitle>
                <p className="text-gray-400">
                  Stay updated with our latest work and cycling tips
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-gray-700 text-gray-400 hover:bg-gray-800 bg-transparent hover:text-blue-600"
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
                    className="border-gray-700 text-gray-400 hover:bg-gray-800 bg-transparent hover:text-pink-600"
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

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Find Us</CardTitle>
              <p className="text-gray-400">
                We're conveniently located in the heart of Bronte with easy
                parking available
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-800 h-96 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.4005067635658!2d151.2578014!3d-33.9050903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b360363ed4c7%3A0x8b92a60a94ec93b1!2sVelo%20Tech%20Centre!5e0!3m2!1sen!2sau!4v1752794761512!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
