"use client";
import Link from "next/link";
import Cart from "../Cart";
import { useAppSelector } from "@/redux/hook";

const MENU_ITEMS = [
    {
        title: "About Us",
        link: "/about-us",
    },
    {
        title: "Contact Us",
        link: "/contact-us",
    },
];
const Navbar = () => {
    const count = useAppSelector(state => state.cart.cartItems)
        .map(item => item.count)
        .reduce((t, i) => t + i, 0);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-5 bg-white text-gray-800 shadow-md">
            <Link href="/" className=" ml-5 font-bold text-2xl text-orange-700">
                Zappo Enterprises
            </Link>
            <ul className=" mr-5 flex justify-between items-center gap-5">
                {MENU_ITEMS.map(item => (
                    <li key={item.title}>
                        <Link href={item.link} className="font-semibold hover:text-orange-700">
                            {item.title}
                        </Link>
                    </li>
                ))}
                <li className="flex items-center hover:text-orange-700">
                    <Cart /> {`(${count})`}
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
