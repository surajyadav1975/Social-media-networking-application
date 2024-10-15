import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const createpost = () => {
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        try{
        e.preventDefault();
        
        const file = e.target.image.files[0];
        const content = e.target.content.value;
        const formData = new FormData();
        formData.append('image', file); 
        formData.append('content', content);
        let response=await fetch('http://localhost:3000/posts/create',{
            method : "POST",
            body:formData,
            credentials: 'include',
          });
          
          if(response.ok){
            navigate('/home');
          }
        }
        catch(err){
            alert('cant create post due to some error ');
            navigate('/home');
        }
    };

  return (
    <div className="bg-white shadow-lg text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 createpost rounded-md bg-blend-multiply p-20">
      <h1 className="text-2xl font-bold underline mb-6 text-center">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-1xl font-bold text-gray-700 mb-2">Image</label>
          <input id="image" name='image' type="file" accept="image/*" className="border rounded-lg pl-2 p-1 w-full" />
        </div>
        
        <div className="mb-4">
          <label className="block text-1xl font-bold text-gray-700 mb-2">Content</label>
          <textarea
           
            id='content'
            name='content'
            className="border p-2 w-full h-28 rounded-lg"
            placeholder="Enter some content here..."
          />
        </div>
        
        <button type="submit" className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-900 rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default createpost;
