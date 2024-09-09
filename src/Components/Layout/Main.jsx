import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Main = () => {
    return (
        <div>
           
            <Header></Header>
            <div className='container mx-auto'><Outlet></Outlet></div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;