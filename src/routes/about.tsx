import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Users, Award, Clock, MapPin, Quote, Star } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const testimonials = [
    {
      name: "Joel Lidden",
      rating: 5,
      text: "When I heard Chris was starting up Velo Tech Centre as a dedicated workshop it was great news. I entrust my bikes only to the very best, and Chris is that. From a maintenance perspective, whenever Chris works on my bikes I walk away both knowing the problem has been resolved and having had the issue identified and explained. For new builds, Chris nails it ... every time. His attention to detail and build finish is exceptional and his pricing for both maintenance and parts is very competitive. Thanks, VeloTech.",
      service: "Maintenance & Custom Builds",
    },
    {
      name: "Jack",
      title: "Media Advisor",
      rating: 5,
      text: "Velo Tech has the skills, technical knowledge and equipment to make sure my bike runs its best. I am always struck by the variety of work Chris has in his workshop when I'm there. Whether it's building the latest Trek for a client or researching retro parts for a bespoke steel frame project, Chris' knowledge is endless. He is also a great communicator, always telling me exactly what he's done with my bike in fine detail. And even though I don't understand what he means half the time, I really appreciate knowing how much he cares. Thanks Velo Tech!",
      service: "Technical Service",
    },
    {
      name: "Michael Courtney",
      title: "Portfolio Manager",
      rating: 5,
      text: "Is Chris the best bike mechanic in Sydney? Probably. Chris has built and serviced 4 bikes for me over the years. Great attention to detail and fantastic customer service. He also offers considered and thoughtful advice on new equipment purchases. Also a top bloke.",
      service: "Multiple Builds & Service",
    },
    {
      name: "Sianne Bennett",
      rating: 5,
      text: "Velo Tech Centre is the only business I trust with my bikes. The quality of the work Chris does and the care he has is outstanding. I've gone to Chris with a range of bikes and different scenarios and he gets them running perfectly every time. I don't think about taking my bikes to anyone else.",
      service: "Complete Bike Care",
    },
  ];

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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-gray-700 bg-gray-800">
              <CardHeader>
                <img
                  src="/placeholder.svg?height=200&width=200"
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
                  src="/placeholder.svg?height=200&width=200"
                  alt="Paul - Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-white text-xl font-display">
                  Paul
                </CardTitle>
                <p className="text-primary font-semibold">Team Member</p>
                <p className="text-gray-400">
                  [Paul's background and expertise will be added here. He brings
                  valuable skills and experience to our team, helping us provide
                  the best possible service to our customers.]
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
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
                    "{testimonial.text}"
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
