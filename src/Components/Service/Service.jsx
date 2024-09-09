import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { img, description, rating, serviceName, _id } = service
    return (
        <Link  to={`/service/${_id}`} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 w-[500px]">
           
           <img
                src={img}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
            />
          
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">{serviceName}</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <span className='font-bold font-mono'>Rating : {rating}</span>
            </div>
        </Link>

    );
};

export default Service;