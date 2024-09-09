import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/MyContext';
import Cart from '../Cart/Cart';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const logOutHandler = () => {
        logOut()
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (event) => {
        event.preventDefault();
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <header className="flex py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50 " >
            <div className="flex flex-wrap items-center justify-between w-full">
                <Link
                    to={'/'}
                    className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2 text-[#F43F5E] font-extrabold lg:text-5xl font-serif"
                >
                    Travel Tour
                </Link>

                <div
                    id="collapseMenu"
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } lg:block lg:static lg:bg-transparent lg:w-auto lg:h-auto max-lg:w-full max-lg:fixed max-lg:bg-white max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md z-50`}
                >
                    <button
                        id="toggleClose"
                        className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
                        onClick={toggleMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            ></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            ></path>
                        </svg>
                    </button>

                    <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3">
                        <li className="mb-6 hidden max-lg:block font-bold font-serif">
                            <Link to={'/'}>Travel Tour</Link>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3">
                            <Link to={'/'} className="hover:text-[#E11D48] text-[#E11D48] block font-semibold text-[15px]">
                                Home
                            </Link>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3">
                            <a href='#tour-services'
                                onClick={scrollToSection}
                                className="hover:text-[#E11D48] text-[#333] block font-semibold text-[15px]">
                                services
                            </a>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3">
                            <a className="hover:text-[#E11D48] text-[#333] block font-semibold text-[15px]">
                                Feature
                            </a>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3">
                            <a to={'/'} className="hover:text-[#E11D48] text-[#333] block font-semibold text-[15px]">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center ml-auto space-x-6">
                    {
                        user?.email && <Cart></Cart>
                    }
                    {
                        user?.email ?
                            <button onClick={logOutHandler} className="text-[#E11D48] hover:underline font-semibold text-[15px] border-none outline-none">
                                Logout

                            </button> :
                            <Link to="/login" className="text-[#E11D48] hover:underline font-semibold text-[15px] border-none outline-none ">
                                Login
                            </Link>


                    }
                    <button className="px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#E11D48] bg-[#E11D48] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#E11D48]">
                        <Link to='/register'>

                            Sign up
                        </Link>
                    </button>

                    <button id="toggleOpen" className="lg:hidden" onClick={toggleMenu}>
                        <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
