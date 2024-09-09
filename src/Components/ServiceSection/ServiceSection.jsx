import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Typewriter } from 'react-simple-typewriter'
import { Link, useLocation } from 'react-router-dom';

const ServiceSection = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation()

    useEffect(() => {
        const isHomePage = location.pathname === '/'
        const limit = isHomePage ? 3 : 0;

        fetch(`http://localhost:4000/services?limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [location.pathname])

    if (loading) {
        return <div className='text-center my-5'>
            <span className="loading loading-spinner text-error text-center"></span>
        </div>
    }
    return (
        <div id="tour-services" >
            <div >
                <h1 className='text-4xl mt-4  text-center font-bold '>
                    Welcome to {' '}
                    <span style={{ color: 'red' }}>

                        <Typewriter

                            words={['Premium service']}
                            loop={5}
                            cursor
                            cursorStyle=' _'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>


                <div  className='lg:flex ' >
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
                <div className='flex justify-center my-5'>
                    <Link
                        to={'/services'}

                        className="flex items-center text-white bg-[#E11D48] font-semibold border border-[#E11D48] py-2 px-6 gap-2 rounded "
                    >
                        <span>View More</span>
                        <svg
                            className="w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceSection;