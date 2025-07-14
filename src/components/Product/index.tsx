"use client";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Star from "../../../public/images/star.svg";
import { addToCart, removeFromCart, updateCount } from "@/redux/slices/cartSlice";
import { CardProps } from "../ProductCard/productCard";

const Product = ({ product }: { product: CardProps }) => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(state => state.cart.cartItems).find(item => item.item.id === product.id)?.count;
    return (
        <div className="mt-20 p-10 text-gray-800 max-w-3xl m-auto">
            <div className="p-4">
                <p className="font-bold pb-0 text-2xl">{product.title}</p>
                <p className="bg-green-600 rounded text-white px-2 flex items-center w-12 text-sm gap-1">
                    {product.rating} <Image src={Star} alt="rating" width={12} height={12} />
                </p>
            </div>
            <div className="flex justify-evenly">
                <Image
                    src={product.image}
                    alt="img"
                    width={400}
                    height={400}
                    style={{ width: "400px", height: "400px" }}
                />
            </div>
            <p className="font-bold mt-4">₹{product.price}</p>
            {!count ? (
                <button
                    onClick={e => {
                        e.stopPropagation();
                        dispatch(addToCart(product));
                    }}
                    className="cursor-pointer px-4 bg-orange-700 text-white py-2 mt-4 h-10 w-full"
                >
                    Add to Cart
                </button>
            ) : (
                <div className="px-4 bg-orange-700 text-white py-2 mt-4 h-10 flex justify-center items-center">
                    <button
                        onClick={e => {
                            e.stopPropagation();
                            if (count === 1) dispatch(removeFromCart(product));
                            else dispatch(updateCount({ id: product.id, count: count - 1 }));
                        }}
                        className="cursor-pointer p-2 mr-3"
                    >
                        -
                    </button>
                    {count}
                    <button
                        onClick={() => {
                            dispatch(updateCount({ id: product.id, count: count + 1 }));
                        }}
                        className="cursor-pointer p-2 ml-3"
                    >
                        +
                    </button>
                </div>
            )}
            <p dangerouslySetInnerHTML={{ __html: product.description }} className="mt-8"></p>
        </div>
    );
};
export default Product;
