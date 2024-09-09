import React, { useContext } from 'react';
import { AuthContext } from '../Context/MyContext';
import { Form, Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const PrivateRouter = ({children}) => {
    const {user , loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <Spinner></Spinner>
    }
    if(!user){
        return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
    }
    return children
};

export default PrivateRouter;
