"use client";
import * as React from "react";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   navigationMenuTriggerStyle,
// } from "./ui/navigation-menu";
// import { NavigationMenuList } from "@radix-ui/react-navigation-menu";
// import Image from "next/image";
// import logo from "../../public/assets/images/Horizontal Putih Merah 0-2.png";
// import Link from "next/link";
import { FloatingNav } from "./ui/floating-navbar";
import { HandCoins, Info, MessageCircle, Users } from "lucide-react";

export function Navbar() {
  const navItems = [
    {
      name: "About",
      link: "/about",
      icon: <Info className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <HandCoins className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Clients",
      link: "/clients",
      icon: <Users className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <MessageCircle className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
