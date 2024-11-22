"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import logo from "../../public/assets/images/Horizontal Putih Merah 0-2.png";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="relative w-full">
      <NavigationMenu
        className={`sticky top-0 py-8 flex flex-row justify-between items-center`}
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <Image width={200} src={logo} alt={`Logo`} />
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList
          className={`bg-white/5 border border-md rounded-full p-2`}
        >
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Services
              </NavigationMenuLink>
            </Link>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Clients
              </NavigationMenuLink>
            </Link>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
