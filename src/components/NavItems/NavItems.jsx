'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItems = ({ item }) => {
    const pathname = usePathname();
    const { name, href, subNavItems } = item;
    const subHref = subNavItems?.map((item) => item.href);
    const current = pathname === href || subHref?.includes(pathname);

    return (
        <li className={`${subNavItems && "dropdown"} ${current ? "current" : ""}`}>
            <Link href={href}>{name}</Link>

            {subNavItems && (
                <ul className="sub-menu">
                    {subNavItems.map((subItem) => (
                        <li key={subItem.id}>
                            <Link href={subItem.href}>{subItem.name}</Link>

                            {/* ✅ Proper nesting: Wrap sub-items inside a <ul> */}
                            {subItem?.subItems && (
                                <ul className="sub-sub-menu">
                                    {subItem?.subItems?.map((subSubItem) => (
                                        <li key={subSubItem.id}>
                                            <Link href={subSubItem.href}>{subSubItem.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default NavItems;
