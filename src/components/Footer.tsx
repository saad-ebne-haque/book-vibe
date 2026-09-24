import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content border-t border-base-300">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* Brand & About */}
                <div className="space-y-4 md:col-span-1">
                    <Link href="/" className="text-3xl font-bold font-heading text-[#131313]">
                        Book Vibe
                    </Link>
                    <p className="text-sm text-[#131313cc] leading-relaxed">
                        Your ultimate destination for discovering, tracking, and exploring books that freshen up your bookshelf.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h6 className="footer-title font-bold text-base text-[#131313]">Quick Links</h6>
                    <div className="flex flex-col space-y-2 mt-3">
                        <Link href="/" className="link link-hover text-[#131313cc]">Home</Link>
                        <Link href="/listed-books" className="link link-hover text-[#131313cc]">Listed Books</Link>
                        <Link href="/pages-to-read" className="link link-hover text-[#131313cc]">Pages to Read</Link>
                    </div>
                </div>

                {/* Legal & Services */}
                <div>
                    <h6 className="footer-title font-bold text-base text-[#131313]">Services</h6>
                    <div className="flex flex-col space-y-2 mt-3">
                        <a className="link link-hover text-[#131313cc]">Book Tracking</a>
                        <a className="link link-hover text-[#131313cc]">Reading Analytics</a>
                        <a className="link link-hover text-[#131313cc]">Wishlist Management</a>
                    </div>
                </div>

                {/* Newsletter / Social */}
                <div className="space-y-4">
                    <h6 className="footer-title font-bold text-base text-[#131313]">Stay Connected</h6>
                    <p className="text-sm text-[#131313cc]">
                        Subscribe to get updates on new arrivals and special recommendations.
                    </p>
                    <div className="join w-full">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="input input-bordered join-item w-full" 
                        />
                        <button className="btn btn-success join-item text-white">Subscribe</button>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-base-300 py-6 text-center text-sm text-[#131313cc]">
                <p>© {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;