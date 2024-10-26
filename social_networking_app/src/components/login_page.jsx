import React from 'react'
import { useNavigate } from 'react-router-dom';

const apiurl = import.meta.env.VITE_API_URL;

function login_page(){
  const navigate=useNavigate();

  const handlesubmit=async (event)=>{

    const email=(event.target.email.value);
    const password=event.target.password.value;
    event.preventDefault();

    let response=await fetch(`${apiurl}/users/login`,{
      method : "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email,password,}),
      credentials: 'include'
    })
    // console.log(response);
    if(response.ok){
      navigate('/home');
    }
    else{
      alert('username or password incorrect');
      navigate('/');
    }
  }

  return (
    <>
      <div className="authentication flex h-screen formpage">
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-4/12 form">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={`/image/2.png`}
            className="mx-auto h-20 w-auto hover:scale-125 duration-500"
          />
          <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handlesubmit} action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                // onClick={handlesubmit}
                type="submit"
                className="flex w-full justify-center rounded-2xl bg-indigo-600 hover:bg-indigo-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-110 duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Do not have account?{' '}
            <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline">
              Register
            </a>
          </p>
        </div>
      </div>
      <div className='w-8/12 image'>
      <img
            alt="Your Company"
            src="/image/1.webp"
            className=" h-full w-full object-fill"
          />
      </div>
      </div>
    </>
  )
}

export default login_page
