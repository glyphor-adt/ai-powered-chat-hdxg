import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "bg-muted text-muted-foreground py-8 md:py-12",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: support@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary"
              >
                <AiFillGithub />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary"
              >
                <AiFillTwitterCircle />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          &copy; {currentYear} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;