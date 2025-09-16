"use client";

import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserIcon from "./UserIcon";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLinkClick = (url: string) => {
    router.push(url);
    setDropdownOpen(false); 
  };

  let timeoutId: NodeJS.Timeout;

	const handleMouseEnter = () => {
  		clearTimeout(timeoutId); // cancel pending close
  		setDropdownOpen(true);
	};

	const handleMouseLeave = () => {
  		timeoutId = setTimeout(() => {
    	setDropdownOpen(false);
  		}, 200); 
	};

  return (
    <Fragment>
      <header className={`${classes.header} ${classes.notPrintable} flex items-center gap-6`}>
        <Link href="/" className={classes.menuItem}>Home</Link>
        <Link href="/Categories" className={classes.menuItem}>Categories</Link>

        <div 
          className="relative"
  		  onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`${classes.brands} hover:bg-gray-200 rounded`}
          >
            Brands
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleLinkClick("/brands")}
              >
                All Brands
              </button>
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleLinkClick("/firstItem")}
              >
                First
              </button>
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleLinkClick("/secondItem")}
              >
                Second
              </button>
            </div>
          )}
        </div>

        <Link href="/user-login" className={classes.icon}><UserIcon /></Link>
      </header>
    </Fragment>
  );
};

export default Header;