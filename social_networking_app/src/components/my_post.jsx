import React from 'react'

function Mypost({post}) {
  return (
    <> 
        <div className="w-11/12 mx-auto bg-white text-center hover:shadow-3xl hover:scale-110  duration-700 rounded-xl shadow-md overflow-hidden md:max-w-1xl my-5 ">
            <div className="h-78 w-full bg-gray-200 h-3/4">
                <img
                className="object-cover w-full h-full"
                src={`data:image/jpeg;base64,${ post.image}`}

                alt="Post Image"
                />
            </div>

            <div className="p flex justify-center items-center h-1/4">
                <div className="font-bold ml-2 text-1xl leading-normal tracking-tight text-gray-900 mb-1 mr-2">{post.content}</div>
            </div>
        </div>
    </>
  )
}

export default Mypost