import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Components/Context/MyContext';
import CartDetails from '../../Components/CartDetails/CartDetails';
import { Link } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';

const Order = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email

    const [orders, setOrders] = useState([])
    const [loader, setLoader] = useState(true)
    const fetchOrders = () => {
        fetch(`http://localhost:4000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoader(false)
            })
            .catch(err => console.error(err))
    }
    useEffect(() => {
        fetchOrders()
    }, [email])

    return (
        <div>
            {
                loader ? <Spinner></Spinner> : <div className="container mx-auto mt-10">
                    <div className="sm:flex shadow-md my-10">
                        <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Your Appointment</h1>
                                <h2 className="font-semibold text-2xl">{orders.length}</h2>
                            </div>

                            {
                                orders.map(order => <CartDetails fetchOrders={fetchOrders} key={order._id} order={order}></CartDetails>)
                            }
                            <Link to={'/'} href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
                                <svg
                                    className="fill-current mr-2 text-indigo-600 w-4"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                                </svg>
                                Continue Shopping
                            </Link>
                        </div>
                        <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8">Booking Summary</h1>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">Booking :  {orders.length}</span>
                                <span className="font-semibold text-sm">590$</span>
                            </div>

                            <div className="py-10">
                                <label
                                    htmlFor="promo"
                                    className="font-semibold inline-block mb-3 text-sm uppercase"
                                >
                                    Promo Code
                                </label>
                                <input
                                    type="text"
                                    id="promo"
                                    placeholder="Enter your code"
                                    className="p-2 text-sm w-full"
                                />
                            </div>
                            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                                Apply
                            </button>
                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <span>$600</span>
                                </div>
                                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Order;