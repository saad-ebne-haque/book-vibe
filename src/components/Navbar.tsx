'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { JSX } from "react";

interface NavLinks {
    path: string;
    title: string;
}



const Navbar = () => {
    const pathname: string = usePathname();

    const navLinks: NavLinks[] = [
        { path: '/', title: 'Home' },
        { path: '/listed-books', title: 'Listed Books' },
        { path: '/pages-to-read', title: 'Pages to Read' },
    ];
    const menus: JSX.Element = <>
        {
            navLinks.map((link: NavLinks) => {
                const isActive: boolean = pathname === link.path;
                return <li key={link.path} className={`text-lg  ${isActive ? 'font-semibold text-success border rounded-lg' : 'text-[#131313cc]'}`}><Link href={link.path}>{link.title}</Link></li>
            })
        }
    </>

    return (
        <div className=" bg-base-100 shadow-sm sticky float top-0 z-100">
            <div className="container mx-auto navbar">


                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {menus}
                        </ul>
                    </div>
                    <span className="btn btn-ghost text-3xl font-bold text-[#131313] font-heading"><Link href='/'>Book Vibe</Link></span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menus
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <button className="btn btn-success text-sm lg:text-lg font-semibold text-white hidden lg:block">Sign In</button>
                    <button className="btn btn-info text-sm lg:text-lg font-semibold text-white">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;