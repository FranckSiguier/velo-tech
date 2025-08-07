import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "./ui/sheet";
import { Menu, Facebook, Instagram } from "lucide-react";
import VeloTechLogo from "./ui/velotech-logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={handleLinkClick}
          >
            <VeloTechLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Social Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-gray-400 hover:text-blue-600 hover:bg-transparent"
              >
                <a
                  href="https://www.facebook.com/velotechcentre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-gray-400 hover:text-pink-600 hover:bg-transparent"
              >
                <a
                  href="https://www.instagram.com/velotechcentre/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-gray-400"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-gray-800 border-gray-700"
              >
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-gray-700">
                    <Link
                      to="/"
                      className="flex items-center space-x-3"
                      onClick={handleLinkClick}
                    >
                      <div className="w-10 h-10">
                        <VeloTechLogo />
                      </div>
                      <span className="hidden md:block font-bold text-white font-display">
                        Velo Tech Centre
                      </span>
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={handleLinkClick}
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          isActive(item.href) ? "text-primary" : "text-gray-300"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Social Links */}
                  <div className="mt-auto pt-6 border-t border-gray-700">
                    <p className="text-sm font-medium text-white mb-4">
                      Follow Us
                    </p>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-gray-600 text-gray-300 hover:bg-primary hover:text-gray-900 hover:border-primary bg-transparent"
                      >
                        <a
                          href="https://www.facebook.com/velotechcentre/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <Facebook className="h-4 w-4" />
                          <span>Facebook</span>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-gray-600 text-gray-300 hover:bg-primary hover:text-gray-900 hover:border-primary bg-transparent"
                      >
                        <a
                          href="https://www.instagram.com/velotechcentre/?hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <Instagram className="h-4 w-4" />
                          <span>Instagram</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
