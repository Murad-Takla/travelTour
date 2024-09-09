import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/MyContext';

const ConfirmOrder = () => {
    const location = useLocation();
    const { user } = useContext(AuthContext)
    const email = user?.email || 'Not registered yet'
    const { serviceId, serviceName, rating, img } = location.state || {};
    
    const bookingFormHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const phone = form.phone.value

        const startDate = form.startDate.value
        const endDate = form.endDate.value
        const area = form.area.value
        const city = form.city.value

        const order = {
            order: serviceId,
            customerName: name,
            serviceName,
            img,
            email,
            phone,
            startDate,
            endDate,
            area,
            city
        }
        fetch(`http://localhost:4000/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(order)
        }).then(res => res.json())
            .then(data => {
                form.reset()
                toast.success(`Your appointment is confirmed`)
            })
    }
    return (
        <>
            <div className="min-h-screen text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="flex items-center justify-center p-12">
                        {/* Author: FormBold Team */}
                        <div className="mx-auto w-full max-w-[550px] bg-white">
                            <form onSubmit={bookingFormHandler}>
                                <div className="mb-5">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="phone"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="email"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        readOnly
                                        defaultValue={email}
                                        placeholder="Enter your email"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label
                                                htmlFor="date"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Start
                                            </label>
                                            <input
                                                type="date"
                                                name="startDate"
                                                id="date"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label
                                                htmlFor="date"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Start
                                            </label>
                                            <input
                                                type="date"
                                                name="endDate"
                                                id="date"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5 pt-3">
                                    <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                                        Address Details
                                    </label>
                                    <div className="-mx-3 flex flex-wrap">
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <input
                                                    type="text"
                                                    name="area"
                                                    id="area"
                                                    placeholder="Enter area"
                                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    placeholder="Enter city"
                                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div>
                                    <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                        Book Appointment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="flex-1  text-center hidden lg:flex">
                        <div
                            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"

                        >
                            <img
                                className='rounded-md w-full h-full'
                                src={img} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default ConfirmOrder;
