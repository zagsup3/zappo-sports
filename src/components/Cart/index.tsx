import Image from "next/image";
import { useState } from "react";
import CloseIcon from "@/../public/images/close (2).png";
import { useAppSelector } from "@/redux/hook";
import CartItem from "./CartItem";
const Cart = () => {
    const [open, setOpen] = useState(false);
    const cart = useAppSelector(state => state.cart.cartItems);
    return (
        <>
            <p
                onClick={() => {
                    setOpen(true);
                }}
                className="cursor-pointer font-semibold text-gray-800 hover:text-orange-700"
            >
                Cart&nbsp;
            </p>
            <div
                className={`bg-gray-700 opacity-70 fixed top-0 right-0 bottom-0 left-0 z-9 ${
                    !!open ? "translate-x-0" : "translate-x-[100%]"
                }`}
                onClick={() => {
                    setOpen(false);
                }}
            ></div>
            <section
                className={`fixed w-[400px] right-0 top-0 bottom-0 bg-white z-10 ${
                    !!open ? "translate-x-0" : "translate-x-[100%]"
                } transition-all duration-100 ease-in`}
            >
                <div className="h-[72px] bg-orange-700 text-white flex justify-between items-center p-4">
                    <p className="font-semibold text-xl">Cart</p>
                    <Image
                        src={CloseIcon}
                        alt="cart"
                        width={24}
                        className="cursor-pointer"
                        onClick={() => {
                            setOpen(false);
                        }}
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex-1/2">
                        {cart.map(item => (
                            <CartItem count={item.count} item={item.item} key={item.item.id} />
                        ))}
                    </div>
                    <div className="fixed bottom-0 left-0 right-0 text-black">
                        <div className="flex justify-between items-center p-2 font-semibold">
                            <p>Total</p>
                            <p>
                                ₹
                                {cart
                                    .map(item => item.count * Number(item.item.price))
                                    .reduce((total, num) => total + num, 0)}
                            </p>
                        </div>
                        <button className="bg-orange-700 text-white font-semibold w-full p-4 cursor-pointer">
                            Checkout
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Cart;
