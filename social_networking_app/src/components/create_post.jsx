import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiurl = import.meta.env.VITE_API_URL;

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const file = e.target.image.files[0];
      const content = e.target.content.value;
      const formData = new FormData();
      formData.append("image", file);
      formData.append("content", content);

      const response = await fetch(`${apiurl}/posts/create`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (response.ok) {
        navigate("/home");
      }
    } catch (err) {
      alert("Cannot create post due to some error");
      navigate("/home");
    }
  };

  return (
    <div className="flex items-center w-full h-full justify-center">
      <div className="w-10/12 h-11/12 bg-white shadow-lg rounded-2xl text-center p-6 space-y-6 shadow-lg bg-gradient-to-r from-indigo-600 to-blue-500">
        <h1 className="text-2xl font-bold text-white text-center mb-20 ">Create Post</h1>
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Image Input */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-semibold text-white"
            >
              Upload Image
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="mt-1 block w-full rounded-md border  text-white border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-2"
            />
          </div>

          {/* Content Textarea */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-semibold text-white"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Enter some content here..."
              className="mt-1 block w-full text-gray-900 h-28 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-2 px-4 mx-auto text-black bg-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
