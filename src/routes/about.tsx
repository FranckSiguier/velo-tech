import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Clock, MapPin, Quote, Star, Users } from "lucide-react";
import { Suspense } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { getTestimonials } from "~/functions/getTestimonials";

export const Route = createFileRoute("/about")({
  ssr: true,
  component: About,
  loader: async () => await getTestimonials(),
});

// Separate component for testimonials that can be wrapped in Suspense
function TestimonialsSection() {
  const { testimonials } = Route.useLoaderData();

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 font-display">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow border-gray-700 bg-gray-800"
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <Badge
                  variant="outline"
                  className="text-xs border-gray-700 text-gray-400"
                >
                  {testimonial.service}
                </Badge>
              </div>
              <Quote className="w-8 h-8 text-gray-400 mb-4" />
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="font-semibold text-white">
                - {testimonial.name}
                {testimonial.title && (
                  <span className="text-gray-400 font-normal">
                    , {testimonial.title}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Loading component for testimonials
function TestimonialsLoading() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 font-display">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[...Array(4)].map((_, index) => (
          <Card
            key={index}
            className="border-gray-700 bg-gray-800 animate-pulse"
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-600 rounded" />
                  ))}
                </div>
                <div className="w-20 h-4 bg-gray-600 rounded" />
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded mb-4" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-gray-600 rounded w-full" />
                <div className="h-4 bg-gray-600 rounded w-3/4" />
                <div className="h-4 bg-gray-600 rounded w-1/2" />
              </div>
              <div className="mt-4 h-4 bg-gray-600 rounded w-1/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function About() {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Customers" },
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Clock, number: "Same Day", label: "Service Available" },
    { icon: MapPin, number: "1", label: "Convenient Location" },
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            <span className="text-primary">Our</span> Story
          </h1>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6 text-gray-300">
                  Velo Tech was built out of two passions: a passion for
                  bicycles, and a passion for the community. Its founder, Chris
                  Schofield, has ridden and raced bikes for as long as he can
                  remember and worked in various shops in the UK and Australia
                  for more than a decade.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-300">
                  What's always captivated Chris about cycling is its ability to
                  connect people from all of life's walks. A 20-year-old student
                  could ride with a CEO of a multinational, a professional
                  footballer could be taught a lesson by an overweight
                  schoolteacher. The bike is an equaliser – a common ground –
                  for people who would otherwise never interact.
                </p>
                <p className="text-gray-400">
                  Velo Tech aims to be an extension of the cycling community. It
                  is not about bravado, pretension or fashion (although we can
                  provide these if you like), but people riding their best bike,
                  so they can live their best lives. We don't just build, repair
                  or maintain your bike, we share our passion with you, hoping
                  you can harness it and love your bike a little more with each
                  visit.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Meet the Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 font-display">
            Meet Our Team
          </h2>
          <div className="grid lg:grid-cols-3  gap-8 max-w-8xl mx-auto">
            <Card className="text-center border-gray-700 bg-gray-800">
              <CardHeader>
                <img
                  src="/chris.png"
                  alt="Chris Schofield - Founder & Head Mechanic"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-white text-xl font-display">
                  Chris Schofield
                </CardTitle>
                <p className="text-primary font-semibold">
                  Founder & Head Mechanic
                </p>
                <p className="text-gray-400">
                  With experience working in bike shops across the UK and
                  Australia for over a decade, Chris combines technical
                  expertise with a genuine passion for cycling and community.
                  His vision for Velo Tech is simple: help people ride their
                  best bike so they can live their best lives.
                </p>
              </CardHeader>
            </Card>

            <Card className="text-center border-gray-700 bg-gray-800">
              <CardHeader>
                <img
                  src="/paul.png"
                  alt="Paul Birtles - Mechanic"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-white text-xl font-display">
                  Paul
                </CardTitle>
                <p className="text-primary font-semibold">Team Member</p>
                <p className="text-gray-400">
                  Bike Tech at Velo Tech Centre since early 2021 and UCI level 2
                  mechanic. Been apart of the Sydney road cycling community for
                  over 35 years and have a real passion for all things bikes and
                  helping others experience the same enjoyment of riding.
                </p>
              </CardHeader>
            </Card>

            <Card className="text-center border-gray-700 bg-gray-800">
              <CardHeader>
                <img
                  src="/will.png"
                  alt="Will - Mechanic"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-white text-xl font-display">
                  Will
                </CardTitle>
                <p className="text-primary font-semibold">Team Member</p>
                <p className="text-gray-400">
                  Will is an active member of the Sydney triathlon community,
                  taking a particular interest in road and triathlon bikes. With
                  several years of experience across a variety of bike shops, he
                  enjoys helping riders fine-tune their setups to get the most
                  out of every ride.
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Testimonials with Suspense */}
        <Suspense fallback={<TestimonialsLoading />}>
          <TestimonialsSection />
        </Suspense>

        {/* Values/Mission */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 mb-16 border border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-display">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              To provide exceptional bike service, quality products, and expert
              advice that keeps our community cycling safely and happily. We
              believe every bike has a story, and we're here to help you write
              yours.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-primary font-display">
                  Quality First
                </h3>
                <p className="text-sm text-gray-400">
                  We use only the best parts and techniques to ensure your bike
                  performs at its best
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-primary font-display">
                  Expert Knowledge
                </h3>
                <p className="text-sm text-gray-400">
                  From the latest tech to vintage classics, our expertise covers
                  the full spectrum of cycling
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-primary font-display">
                  Personal Service
                </h3>
                <p className="text-sm text-gray-400">
                  Every customer receives individual attention and detailed
                  explanations of all work performed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 font-display">
            Ready to Experience the Difference?
          </h2>
          <p className="text-gray-400 mb-8">
            Join our community of satisfied customers and discover why Velo Tech
            Centre is the trusted choice for bike service in Bronte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-400 text-gray-900"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-gray-900 bg-transparent"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
