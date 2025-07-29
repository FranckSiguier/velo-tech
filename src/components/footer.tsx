import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import VeloTechLogo from "./ui/velotech-logo";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <VeloTechLogo />
              <span className="text-xl font-bold text-white font-display">
                Velo Tech Centre
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Bronte's premier bike shop providing expert service, quality
              products, and professional advice for all your cycling needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/velotechcentre/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/velotechcentre/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">General Service</li>
              <li className="text-gray-400">Disc Brake Service</li>
              <li className="text-gray-400">Premium Service</li>
              <li className="text-gray-400">Ultimate Service</li>
              <li className="text-gray-400">Custom Bike Builds</li>
              <li className="text-gray-400">Wheel Building</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Shop 7/22-28 Macpherson St</p>
                  <p>Bronte NSW 2024</p>
                  <p>Australia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">(02) 7901 3243</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">
                  chris@velotechcentre.com.au
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Mon, Wed, Fri: 8:30AM-5PM</p>
                  <p>Tue, Thu: 7:30AM-6PM</p>
                  <p>Sat & Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Velo Tech Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
