"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-300 p-4 text-center">
      <div className="mb-2">
        <Link
          href="/"
          className="mx-4 text-charcoal-600 hover:underline"
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className="mx-4 text-charcoal-600 hover:underline"
        >
          About us
        </Link>
        <Link
          href="/contact"
          className="mx-4 text-charcoal-600 hover:underline"
        >
          Contact
        </Link>
      </div>
      <div className="text-sm text-gray-600">
        &copy; {currentYear} NobleBerserker&apos;s React Shop
      </div>
    </footer>
  );
};

export default Footer;
