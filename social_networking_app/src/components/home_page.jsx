import React from 'react'
import Header from './header'
import Sidebar from './sidebar';
import Post from './post_list';
function home_page() {
  return (
    <>
        <Header></Header>
        <div className='flex'>
            <Sidebar></Sidebar>
            <div className='mx-auto'>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
        </div>
    </>
  )
}

export default home_page