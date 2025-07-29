import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  ExternalLink,
} from "lucide-react";

export default function InstagramCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder Instagram posts - replace with actual Instagram API integration
  const instagramPosts = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=300",
      caption: "Custom road bike build completed! 🚴‍♂️ #CustomBuild #RoadBike",
      likes: 45,
      date: "2 days ago",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=300",
      caption:
        "E-bike service in progress. Battery diagnostics and motor cleaning ⚡",
      likes: 32,
      date: "3 days ago",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=300",
      caption:
        "Fresh wheel build ready for pickup! Hand-built with precision 🛞",
      likes: 28,
      date: "5 days ago",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=300&width=300",
      caption: "Mountain bike overhaul transformation. Before and after! 🏔️",
      likes: 67,
      date: "1 week ago",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=300&width=300",
      caption: "New Shimano components just arrived! Upgrade time 🔧",
      likes: 41,
      date: "1 week ago",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=300&width=300",
      caption:
        "Team ride preparation. Getting all bikes ready for the weekend! 🚴‍♀️",
      likes: 53,
      date: "2 weeks ago",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === instagramPosts.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? instagramPosts.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {/* Carousel Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Instagram className="w-6 h-6 text-pink-500" />
          <span className="font-semibold text-white">@velotechcentre</span>
        </div>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-gray-700 text-gray-400 hover:bg-black bg-transparent"
        >
          <a
            href="https://www.instagram.com/velotechcentre/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-primary"
          >
            View on Instagram <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>

      {/* Carousel Container */}
      <div className="hidden md:block relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {instagramPosts.map((post) => (
            <div key={post.id} className="w-1/3 flex-shrink-0 px-2">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-gray-800 border-gray-700">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt="Instagram post"
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <Instagram className="w-5 h-5 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                      {post.caption}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>❤️ {post.likes} likes</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white shadow-lg border-gray-700 text-gray-400 hover:bg-gray-700"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white shadow-lg border-gray-700 text-gray-400 hover:bg-gray-700"
          onClick={nextSlide}
          disabled={currentIndex === instagramPosts.length - 3}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Mobile Responsive Version */}
      <div className="md:hidden">
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-4">
            {instagramPosts.map((post) => (
              <div key={post.id} className="flex-shrink-0 w-64">
                <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt="Instagram post"
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Instagram className="w-4 h-4 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                        {post.caption}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>❤️ {post.likes}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="hidden md:flex justify-center mt-6 gap-2">
        {Array.from({ length: instagramPosts.length - 2 }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-gray-700"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
