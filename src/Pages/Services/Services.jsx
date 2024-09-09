    import React, { useEffect, useState } from 'react';
    import Service from '../../Components/Service/Service';
    import { Typewriter } from 'react-simple-typewriter';

    const Services = () => {
       
        const [services, setServices] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            fetch(`http://localhost:4000/services`)
                .then(res => res.json())
                .then(data => {
                    setServices(data)
                    setLoading(false)
                })
        }, [])

        if (loading) {
            return <div className='text-center my-5'>
                <span className="loading loading-spinner text-error text-center"></span>
            </div>
        }
        console.log(services)
        return (
            <div >
                <h1 className='text-4xl mt-4  text-center font-bold '>
                Our all  {' '}
                    <span style={{ color: 'red' }}>

                        <Typewriter

                            words={['Services']}
                            loop={5}
                            cursor
                            cursorStyle=' _'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <div className='grid lg:grid-cols-3 mb-4'>

                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        );
    };

    export default Services;