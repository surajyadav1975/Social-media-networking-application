import React from 'react'
import { useNavigate } from 'react-router-dom';

const apiurl = import.meta.env.VITE_API_URL;

function register_page(){

  const navigate=useNavigate();

  const handlesubmit=async (event)=>{
    const username=(event.target.username.value);
    const email=(event.target.email.value);
    const password=event.target.password.value;
    event.preventDefault();
    let response=await fetch(`${apiurl}/users/register`,{
      method : "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username,email,password,})
    })
    response=await response.text();
    // console.log(response);

    navigate('/');
  }

  return (
    <>
      <div className="authentication flex h-screen formpage">
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-6/12 form1">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={`/image/2.png`}
            className="mx-auto h-20 w-auto hover:scale-125 duration-500"
          />
          <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handlesubmit} action="#" method="POST" className="space-y-6">
          <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  type="username"
                  name="username"
                  required
                  autoComplete="username"
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                // onClick={handlesubmit}
                type="submit"
                className="flex w-full justify-center rounded-2xl  hover:scale-110 duration-500 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"   
                style={{backgroundColor: 'orangered',backgroundImage: 'linear-gradient(90deg, #FF4500 0% ,#ff7f50 100%)'}}
              >
                Register
              </button>
            </div>
          </form>

        </div>
    </div>
    <div className='w-6/12 image'>
      <img
            alt="Your Company"
            src="/image/6.jpg"
            className=" h-full w-full object-fill"
          />
      </div>
    </div>
    </>
  )
}

export default register_page
