"use client";
import React from 'react';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
    const pathname = usePathname();

    const linkClass = (path) =>
        pathname === path
            ? "text-blue-600 font-semibold hover:text-blue-500 underline"
            : "text-gray-700 hover:text-blue-500";


    return (
        <div className='flex items-center justify-between p-5 bg-gray-300'>
            <div>
                {/* <img src="/next.svg" alt="" srcset="" width={150} height={50} /> */}
                 <Image
                          src='/next.svg'
                          alt="Logo"
                          
                          className="object-cover"
                          width={150}
                          height={50}
                        />
            </div>
            <div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild><Link href="/" className={linkClass("/")}>Home</Link></NavigationMenuLink>
                        </NavigationMenuItem>

                            <NavigationMenuItem>
                            <NavigationMenuLink asChild><Link href="/menu" className={linkClass("/menu")}>Menu</Link></NavigationMenuLink>
                        </NavigationMenuItem>


                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/about" className={linkClass("/about")}>About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/blog" className={linkClass("/blog")}>Blog</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
};

export default Header;