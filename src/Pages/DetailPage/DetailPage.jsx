import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetailPage = () => {
    const details = useLoaderData()
   
    return (
        <div className="flex flex-col justify-center items-center  lg:min-h-screen p-2 ">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden  w-full">
                <img
                    src={details.img}
                    alt="Mountain"
                    className="w-full lg:h-[500px] object-cover"
                />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {details.serviceName}
                    </h2>
                    <p className="text-gray-400 font-bold text-lg leading-tight mb-4">
                        {details.description}
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <svg className="h-8 w-8 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                            </svg>

                            <span className="text-gray-600 font-bold text-lg" >{details.rating} / 5 </span>
                        </div>
                        <Link 
                        to={`/confirm/${details._id}`} 
                        state={{ serviceId: details._id,serviceName: details.serviceName, rating: details.rating, img: details.img }}
                        className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-[#e11d48]">
                            Confirm
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetailPage;