import { useAppDispatch } from "@/redux/hook";
import { CartProps, removeFromCart, updateCount } from "@/redux/slices/cartSlice";
import Image from "next/image";

const CartItem = ({ count, item }: CartProps) => {
    const dispatch = useAppDispatch();
    return (
        <div className="text-black flex items-center p-2 border-b-2">
            <div>
                <Image src={item.image} alt="img" width={50} height={50} className="h-[50px] object-contain" />
            </div>
            <div className="flex-1/2 ml-2">
                <p className="font-semibold truncate">{item.title}</p>
                <p>{item.price}</p>
            </div>
            <div>
                <button
                    onClick={() => {
                        if (count === 1) dispatch(removeFromCart(item));
                        else dispatch(updateCount({ id: item.id, count: count - 1 }));
                    }}
                    className="cursor-pointer p-2"
                >
                    -
                </button>
                {count}
                <button
                    onClick={() => {
                        dispatch(updateCount({ id: item.id, count: count + 1 }));
                    }}
                    className="cursor-pointer p-2"
                >
                    +
                </button>
            </div>
        </div>
    );
};
export default CartItem;
