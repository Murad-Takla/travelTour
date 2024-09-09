import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";
import DetailPage from "../../Pages/DetailPage/DetailPage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import ConfirmOrder from "../../Pages/ConfirmOrder/ConfirmOrder";
import Order from "../../Pages/Order/Order";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                element: <PrivateRouter><DetailPage></DetailPage></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:4000/services/${params.id}`)

            },

            {
                path: '/confirmOrder',
                element: <ConfirmOrder></ConfirmOrder>

            },
            {
                path : '/confirm/:id',
                element: <PrivateRouter><ConfirmOrder></ConfirmOrder></PrivateRouter>
            },
            {
                path: '/orders',
                element: <Order></Order>
            }
        ]

    },
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    }
])