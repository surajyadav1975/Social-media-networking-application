import React from 'react'
import { useNavigate } from 'react-router-dom'

const apiurl = import.meta.env.VITE_API_URL;

function RegisterPage() {

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    event.preventDefault();

    let response = await fetch(`${apiurl}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password })
    })
    response = await response.text();

    navigate('/');
  }

  return (
    <div className="flex h-screen">
      {/* Left Side: Form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <img
              alt="Your Company"
              src="/image/2.png"
              className="mx-auto h-24 w-auto transition-transform transform hover:scale-110 duration-300"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-white">
              Register your account
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-10 bg-white p-6 rounded-xl shadow-xl border border-gray-600">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-md shadow-lg transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-700 underline">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden photo lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(/image/6.jpg)' }} />
    </div>
  );
}

export default RegisterPage;
