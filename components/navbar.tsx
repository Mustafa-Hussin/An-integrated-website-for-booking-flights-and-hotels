"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { 
  Plane, 
  Building2, 
  Package, 
  User, 
  Calendar,
  Map,
  Phone,
  Info
} from "lucide-react";

const routes = [
  {
    href: "/flights",
    label: "رحلات الطيران",
    icon: Plane,
  },
  {
    href: "/hotels",
    label: "الفنادق",
    icon: Building2,
  },
  {
    href: "/packages",
    label: "الباقات السياحية",
    icon: Package,
  },
  {
    href: "/activities",
    label: "الأنشطة",
    icon: Calendar,
  },
  {
    href: "/destinations",
    label: "الوجهات",
    icon: Map,
  },
  {
    href: "/contact",
    label: "اتصل بنا",
    icon: Phone,
  },
  {
    href: "/about",
    label: "من نحن",
    icon: Info,
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="ml-8 flex items-center space-x-2">
          <Plane className="h-6 w-6" />
          <span className="text-xl font-bold mr-2">رحلات</span>
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {routes.map(({ href, label, icon: Icon }) => (
              <NavigationMenuItem key={href}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "flex items-center gap-1",
                      pathname === href
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center mr-auto gap-4">
          <ThemeToggle />
          <Link href="/auth/login">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">تسجيل الدخول</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}