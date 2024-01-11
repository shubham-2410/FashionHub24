
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

function CartItem({ item }) {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart");
    }
    return (
        <div className='flex border-b-2 border-gray-800  max-w-[55rem]'>
            <div className='min-h-[180px] min-w-[180px] flex justify-center items-center m-8 m1-4'>
                <img src={item.image} alt='item' className=" max-w-[180px] max-h-[180px]" />
            </div>

            <div className='m-8 ml-8 mr-9'>
                <h1 
                    className='text-2xl font-semibold pb-3'> {item.title}
                </h1>

                <h1 className='text-[15px] text-gray-700 leading-6 font-serif'> 
                    {item.description.split(" ").slice(0, 15).join(" ") + "..."}
                </h1>

                <div
                 className='flex justify-between items-center mt-[10px]'>

                    <div className=" text-green-800 font-bold text-[20px]">
                        ${item.price}
                    </div>

                    <div onClick={removeFromCart}
                        className='w-[40px] h-[40px] bg-red-300 rounded-full flex justify-center items-center '>
                        <p>
                            <RiDeleteBinLine className='text-red' />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;