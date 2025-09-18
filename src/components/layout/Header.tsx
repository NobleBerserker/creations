"use client";

import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserIcon from "./UserIcon";
import ShoppingCart from "./ShoppingCart";
import classes from "./Header.module.css";
import CartModal from "@/components/UI/CartModal";

const Header: React.FC = () => {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const handleLinkClick = (url: string) => {
  //   router.push(url);
  //   setDropdownOpen(false); 
  // };

  let timeoutId: NodeJS.Timeout;

	const handleMouseEnter = () => {
  		clearTimeout(timeoutId); 
  		setDropdownOpen(true);
	};

	const handleMouseLeave = () => {
  		timeoutId = setTimeout(() => {
    	setDropdownOpen(false);
  		}, 200); 
	};

  return (
    <Fragment>
      <header className="
        fixed top-0 left-0 w-full h-20 bg-gray-100 text-gray-500 flex items-center
        border-b-2 border-gray-300 px-10 z-[1050] print:hidden
        overflow-x-auto md:overflow-visible
      ">
        <Link href="/" className="text-charcoal-600 cursor-pointer ml-0 md:ml-0">
          Home
        </Link>
        <Link href="/Categories" className="text-charcoal-600 cursor-pointer ml-4 md:ml-4">
          Categories
        </Link>

        <div
          className="relative ml-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-charcoal-600 cursor-pointer">
            Brands
          </div>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-[1000] text-charcoal-600">
              <Link
                href="/brands"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                All Brands
              </Link>
              <Link
                href="/good-brand"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Good Brand
              </Link>
              <Link
                href="/great-brand"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Great Brand
              </Link>
            </div>
          )}
        </div>
        <div className="ml-auto flex items-center gap-4">
          <CartModal />
          <Link href="/user-login">
            <UserIcon size={28} className="text-charcoal-600 hover:text-charcoal-700" />
          </Link>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;