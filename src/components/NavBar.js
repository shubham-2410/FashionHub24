import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function NavBar() {
    const cart = useSelector((state) => state.cart);

    return (
        <div className="bg-slate-900 lg:text-2xl sm:text-xl">
            <div className="flex justify-between items-center h-20 max-w-6xl mx-auto text-white">
                <div>
                    <NavLink to='/' className="ml-5 font-semibold ">
                        FashionHub24
                    </NavLink>
                </div>

                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                    <div>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </div>
                    <NavLink to='/cart'>
                        <div className="relative">
                            <FaShoppingCart className="text-2xl" />

                            {
                                cart.length > 0 &&
                                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                                    {cart.length}
                                </span>
                            }
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
