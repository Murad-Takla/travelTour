import React, { useContext } from 'react';
import Logo from '../Login/Login.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/MyContext';
import toast from 'react-hot-toast';
const Register = () => {

  const {createUser} = useContext(AuthContext)
  const registerFromHandler =  (event) => {
    event.preventDefault()

    const form = event.target 
    const username = form.username.value 
    const email = form.email.value 
    const password = form.password.value 
    const confirmPassword = form.confirmPassword.value 

    if(password !== confirmPassword) {
      return toast.error('Passwords do not match. Please ensure both fields are identical.')
    }
    createUser(email , password)
    .then(result => {
      const user = result.user 
      form.reset() 
      toast.success('Successfully Registered')

    })
    .catch(err => console.error (err))
  }

  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <img
            className="mx-auto h-12 w-auto"
            src={Logo}
            alt=""
          />
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for an account
          </h2>
          <form 
          onSubmit={registerFromHandler}
          className="space-y-6" >
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  name="username"
                  type="username"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email-address"
                  autoComplete="email-address"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  name="confirmPassword"
                  type="password"
                  autoComplete="confirm-password"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4" />
              <Link to='/login' className="text-xs text-gray-500 uppercase">
                Already have an account ?
              </Link>
              <span className="border-b w-1/5 md:w-1/4" />
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-[#e11d48] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                Register Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>


  );
};

export default Register;