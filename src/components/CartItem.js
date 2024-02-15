import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

function CartItem({ item }) {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart");
    };

    return (
        <div className="relative bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-36 rounded-lg" />
                <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="text-lg font-semibold text-gray-800">${item.price}</p>
                </div>
            </div>
            <button
                onClick={removeFromCart}
                className="absolute bottom-2 right-2 text-white bg-red-300 hover:bg-red-600 py-2 px-4 rounded-md focus:outline-none"
            >
                <RiDeleteBinLine  className="h-6 w-6" />
            </button>
        </div>
    );
}

export default CartItem;
