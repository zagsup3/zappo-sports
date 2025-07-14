import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Star from "../../../public/images/star.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addToCart, removeFromCart, updateCount } from "@/redux/slices/cartSlice";
import Link from "next/link";
export type CardProps = {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string | StaticImport;
    rating: string;
};
export type Props = {
    data: CardProps;
};
const Card = ({ data }: Props) => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(state => state.cart.cartItems).find(item => item.item.id === data.id)?.count;
    return (
        <article className="border border-solid border-black/[.08] dark:border-white/[.145] transition-colors w-72 cursor-pointer shadow-md rounded-2xl hover:shadow-2xl overflow-hidden">
            <Link href={`/product/${data.id}`}>
                <Image width={72} src={data.image} alt={data.title} className="w-72 h-72 object-cover" />
                <p className="p-2 font-semibold pb-0 overflow-hidden text-ellipsis">{data.title}</p>
                {/* <p className="p-2 pt-0 overflow-hidden text-ellipsis truncate">{data.description}</p> */}
                <p className="bg-green-600 rounded text-white ml-2 px-2 flex items-center w-12 text-sm gap-1">
                    {data.rating} <Image src={Star} alt="rating" width={12} height={12} />
                </p>
            </Link>
            <div className="flex justify-between items-center p-2">
                <p className="font-semibold text-lg">₹{data.price}</p>
                {!count ? (
                    <button
                        onClick={e => {
                            e.stopPropagation();
                            dispatch(addToCart(data));
                        }}
                        className="cursor-pointer bg-orange-700 rounded-2xl px-3 py-1 text-white"
                    >
                        Add to Cart
                    </button>
                ) : (
                    <div className="bg-orange-700 rounded-2xl px-3 py-1 text-white">
                        <button
                            onClick={e => {
                                e.stopPropagation();
                                if (count === 1) dispatch(removeFromCart(data));
                                else dispatch(updateCount({ id: data.id, count: count - 1 }));
                            }}
                            className="cursor-pointer mr-3"
                        >
                            -
                        </button>
                        {count}
                        <button
                            onClick={() => {
                                dispatch(updateCount({ id: data.id, count: count + 1 }));
                            }}
                            className="cursor-pointer ml-3"
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
        </article>
    );
};
export default Card;
