import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-12 border-t border-white/10">
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="text-2xl font-serif font-bold text-white tracking-widest">
                        AETHER
                    </Link>
                    <p className="mt-4 text-sm text-gray-500">
                        Redefining time for the modern visionary. Engineered with precision, designed for eternity.
                    </p>
                </div>

                {/* Links Column 1 */}
                <div className="col-span-1">
                    <h4 className="text-white font-semibold mb-4">Collection</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-primary transition-colors">Titanium Series</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Sapphire Edition</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Carbon Core</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Accessories</Link></li>
                    </ul>
                </div>

                {/* Links Column 2 */}
                <div className="col-span-1">
                    <h4 className="text-white font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-primary transition-colors">Warranty</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Care Guide</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Socials */}
                <div className="col-span-1">
                    <h4 className="text-white font-semibold mb-4">Connect</h4>
                    <div className="flex space-x-4">
                        <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <Twitter size={20} />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                    <div className="mt-6">
                        <p className="text-xs text-gray-500">
                            © 2026 Aether Timepieces. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
