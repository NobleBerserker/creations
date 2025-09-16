"use client";

import React from 'react';
import Link from 'next/link';
import classes from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        <Link href="/">Home</Link>
        <Link href="/about-us">About us</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={classes.copy}>
        &copy; {currentYear} NobleBerserker's React Shop
      </div>
    </footer>
  );
};

export default Footer;