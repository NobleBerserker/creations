"use client";

import React, { Fragment, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import UserIcon from './UserIcon';
import classes from './Header.module.css';


const Header: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => { if (navigator.onLine) setIsOpen(true); };
  const handleMouseLeave = () => { setTimeout(() => setIsOpen(false), 300); };
  const handleLinkClick = (url: string) => { router.push(url); };

  return (
    <Fragment>
      <header className={`${classes.header} ${classes.notPrintable}`}>
        <Link href="/" className={classes.menuItem}>Home</Link>
        <Link href="/Categories" className={classes.menuItem}>Categories</Link>
        <Dropdown show={isOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Dropdown.Toggle className={classes.xmls} id="xmls-dropdown">
            <Link href="/brands" className={classes.menuItem}>Brands</Link>
          </Dropdown.Toggle>
          {isOpen && (
            <Dropdown.Menu onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Dropdown.Item onClick={() => handleLinkClick('/firstItem')}>First</Dropdown.Item>
              <Dropdown.Item onClick={() => handleLinkClick('/secondItem')}>Second</Dropdown.Item>
            </Dropdown.Menu>
          )}
        </Dropdown>
        <Link href="/user-login" className={classes.icon}><UserIcon /></Link>
      </header>
    </Fragment>
  );
};

export default Header;