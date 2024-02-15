import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from '../redux/slices/CartSlice';

function Card({ item }) {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Removed from cart");
    };

    const addToCart = () => {
        dispatch(add(item));
        toast.success("Added to cart");
    };

    return (
        <div className="bg-white rounded-lg  shadow-md overflow-hidden hover:scale-105 transition  duration-500 ease-in-out">
            <img src={item.image} alt={item.category} className=" h-64  mx-auto" />
            <div className="p-4">
                <h3 className="text-gray-800 font-semibold text-lg truncate">{item.title}</h3>
                <p className="text-gray-600 text-sm truncate">{item.description}</p>
                <div className="flex items-center justify-between mt-4">
                    <p className="text-green-600 font-semibold">${item.price}</p>
                    <button
                        onClick={cart.some((p) => p.id === item.id) ? removeFromCart : addToCart}
                        className={`px-3 py-1 text-xs uppercase font-semibold rounded-full ${
                            cart.some((p) => p.id === item.id) ? 'bg-red-300 text-red-700' : 'bg-green-300 text-green-700'
                        } hover:bg-red-700 hover:text-white transition duration-300 ease-in`}
                    >
                        {cart.some((p) => p.id === item.id) ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
