"use client";

import {
    Navbar as NextUINavbar,
    NavbarContent,
    Link,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarItem,
    NavbarBrand,
} from "@nextui-org/react";
import { useState } from "react";
import { ThemeSwitcher } from "@/components";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const currentPath = usePathname();

    const handleRedirect = (path: string) => {
        setIsMenuOpen(false);
        router.push(path);
    };

    return (
        <NextUINavbar
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            shouldHideOnScroll
            isBordered
            height="3rem"
            classNames={{
                wrapper: "max-w-[1280px] px-3",
            }}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>

            <NavbarContent className="sm:flex-1" justify="center">
                <NavbarBrand>
                    <Link
                        href="/"
                        className="font-extrabold tracking-[2px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
                    >
                        Iabhishek
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.path} isActive={currentPath === item.path}>
                        <Link
                            href={item?.path}
                            className={` hover:text-primary dark:hover:text-primary ${currentPath === item.path ? "font-bold underline text-primary" : "text-black dark:text-white font-medium"}`}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <ThemeSwitcher />
            </NavbarContent>

            <NavbarMenu className="bg-default-500/20">
                {menuItems.map((item) => (
                    <NavbarMenuItem
                        onClick={() => handleRedirect(item.path)}
                        key={item.name}
                        isActive={currentPath === item.path}
                        className={`${currentPath === item.path ? "font-bold underline text-primary" : "text-black dark:text-white font-medium"}`}
                    >
                        {item.name}
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    );
}
