import React from 'react';
import toast from 'react-hot-toast';

const CartDetails = ({ order  , fetchOrders}) => {
    const { _id,  area, city, customerName, email, phone, img, serviceName } = order
    const deleteOrderHandler = (id) =>{
        const agree = window.confirm(`Are you want to sure to delete ${serviceName} ?`)
        if(agree){
            fetch(`http://localhost:4000/orders/${id}`, {
                method:'Delete',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            })
            .then(res => res.json())
            .then(data =>{
                if (data.deletedCount > 0) {
                    toast.success(`${serviceName} Successfully deleted!`);
                    fetchOrders();  // Re-fetch orders after deletion
                }
            })
        }
    }
    return (
        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
            <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                    src={img}
                    className="h-full object-center object-cover md:block hidden"
                />
            </div>
            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">

                <div className="flex items-center justify-between w-full">
                    <p className="text-base font-black leading-none text-gray-800">
                        {serviceName}
                    </p>

                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">
                    Customer Name : {customerName}
                </p>
                <p className="text-xs leading-3 text-gray-600 py-4">Phone : {phone}</p>
                <p className="w-96 text-xs leading-3 text-gray-600">
                    Email : {email}
                </p>
                <div className="flex items-center justify-between pt-5">
                
                    <p 
                    onClick={() => {deleteOrderHandler(_id)}}
                    className="ml-auto pr-5 text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                        Remove
                    </p>
                </div>
            </div>
        </div>

    );
};

export default CartDetails;