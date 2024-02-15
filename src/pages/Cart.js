import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { remove } from "../redux/slices/CartSlice";
import { toast } from 'react-hot-toast';

function Cart() {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, cart) => acc + cart.price, 0));
    }, [cart]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnCheckout = () => {
        toast.success("Your order is placed 🥳🥳");
        cart.map((item) => {
            dispatch(remove(item.id));
        });
        navigate('/');
    };

    return (
        <div className="container mx-auto px-4 py-8 min-h-[81vh]">
            <h1 className="text-4xl font-bold mb-8 text-center">Your Shopping Cart</h1>
            {cart.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="lg:col-span-1">
                        {cart.map((item) => (
                            <CartItem item={item} key={item.id} />
                        ))}
                    </div>
                    <div className="lg:col-span-1 mt-6 lg:mt-0">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                            <p className="text-gray-700 mb-2">Total items: {cart.length}</p>
                            <p className="text-gray-700 mb-4">Total Amount: ${totalAmount.toFixed(2)}</p>
                            <button
                                onClick={handleOnCheckout}
                                className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-80">
                    <p className="text-lg font-semibold mb-4">Your cart is empty</p>
                    <NavLink to="/" className="text-white">
                        <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                            Start Shopping
                        </button>
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default Cart;
