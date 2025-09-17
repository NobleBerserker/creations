"use client"

import React from "react";

interface ShoppingCartProps {
  className?: string;      
  size?: number | string;  
  color?: string;          
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  className = "",
  size = 32,
  color = "currentColor",
}) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="shopping-cart"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className={className}
      width={size}
      height={size}
      fill={color}
    >
      <path d="M528.12 301.319l47.273-208C578.563 82.744 567.155 72 554.22 72H128l-12.812-64H16C7.164 8 0 15.164 0 24v16c0 8.836 7.164 16 16 16h72l70.962 354.957C154.123 416.776 168 432 168 432h344c8.837 0 16-7.164 16-16v-16c0-8.836-7.163-16-16-16H190.617l-7.47-36.79h314.973c14.219 0 26.603-9.496 29.992-23.891zM192 464c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm320 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"></path>
    </svg>
  );
};

export default ShoppingCart;