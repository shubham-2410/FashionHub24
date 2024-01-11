import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from '../redux/slices/CartSlice';

function Card({ item }) {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch(remove(item.id));
        toast.error("Remove from cart");
    }

    function addToCart() {
        dispatch(add(item));
        toast.success("Added to cart");
    }

    return (
        <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in
            gap-3 p-4 mt-10 ml-5 rounded-xl 
            shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-[10] text-left">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className="h-[180px]">
                <img src={item.image} alt={item.category} className="h-full w-full" />
            </div>
            <div className="flex justify-between gap-16 items-center w-full mt-5">
                <div>
                    <p className=" text-green-600 font-semibold">${item.price}</p>
                </div>
                {
                    Array.isArray(cart) && cart.some((p) => p.id === item.id) ?
                        <button onClick={removeFromCart}
                            className="bg-red-300 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                            Remove Item  
                        </button> :
                        <button onClick={addToCart}
                            className="bg-green-300 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-green-700 hover:text-white transition duration-300 ease-in">
                            Add to Cart
                        </button>
                }
            </div>
        </div>
    );
}

export default Card;
