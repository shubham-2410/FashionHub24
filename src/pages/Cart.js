import { useDispatch, useSelector } from "react-redux";
import { NavLink , useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { remove } from "../redux/slices/CartSlice";
import toast from 'react-hot-toast';

function Cart(product){

    const {cart} = useSelector((state)=>state)
    const [TotalAmount , setTotalAmount] = useState(0);

    useEffect(()=>{
        setTotalAmount(cart.reduce((acc , cart) =>acc + cart.price , 0))
    }, [cart])

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handelOnCheckout = ()=>{
        toast.success("Your order is placed 🥳🥳")
        cart.map((item)=>{
            dispatch(remove(item.id));
        })
        navigate('/');
    }
    return(
        <div className="max-w-5xl mx-auto">
            {
                cart.length > 0?
                (<div className="flex  gap-x-4 flex-wrap">
                    <div > 
                         {
                            cart.map((item )=>{
                                return <CartItem item={item} key={item.id}/>
                            })
                         }
                    </div>

                    <div className="min-w-2xl mt-16 flex items-center gap-32 justify-center max-h-[550px] w-full mb-20">
                        <div>
                            <div className=" text-green-600 font-semibold text-2xl">
                                Your Cart
                            </div>
                            <div className=" text-green-600 font-semibold text-5xl"> 
                                Summary 
                            </div>
                            <p className="mt-3 ">Total items : {cart.length}</p>
                        </div>
                        <div className="mt-11">
                            <p >Toatal Amount : <span className=" text-black font-semibold ">${TotalAmount}</span></p>
                            <button  onClick={()=>{handelOnCheckout()}}
                            className=" bg-green-600 text-white font-bold w-[100%] py-2 rounded-md mt-[10px]">
                                CheckOut Now
                            </button>
                        </div>

                    </div>
                </div>):
                (
                    <div className="flex flex-col justify-center items-center gap-3 h-[80vh]">
                        No Item Found
                        <NavLink to='/'>
                            <button className=" bg-green-500 text-white font-bold text-2xl py-3 w-[180px] rounded-md">
                                Shop Now
                            </button>
                        </NavLink>
                    </div>
                )
            }
        </div>
    );
}

export default Cart;