import React, { useState } from 'react'
// import { useNavigate } from 'react-router'
import Button from './Button';
import { usePostContext } from '../service/context/PostContext';

const Formcamp = () => {
  const {setPosts} = usePostContext();
  const [name, setName] = useState('');
  const [post, setPost] = useState('');
  // const navigate = useNavigate();

  // const formAction = async (data) => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   const newPosts= {
  //     id: posts?.length + 1,
  //     name: data.get('name'),
  //     post: data.get('post')
  //   }

  //   setPosts((prev) => [...prev, newPosts]);
  //   // navigate("/post");

  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPosts= {
      id:Math.floor(Math.random() * 1000),
      name: name,
      post: post
    }
  // handlePostSubmit(newPosts);
    setPosts((prev) => [...prev, newPosts]);
    setName('');
    setPost('');
  }

  return (
    <div className='border border-gray-50 shadow-lg rounded-lg p-4 bg-white mx-auto'>
        <form 
        // action={formAction} 
        onSubmit={handleSubmit}
        className='w-lg'>
            <label htmlFor="name" className='font-sans text-lg'>Enter Your Name</label>
            <input 
            onChange={(e) => setName(e.target.value)}
            name='name'
            value={name}
            type="text" id='name' className='w-full border border-gray-200 rounded-lg mt-1 p-2' />
            <label htmlFor="post" className='font-sans text-lg'>Enter Your Post</label>
            <textarea
             onChange={(e) => setPost(e.target.value)}
            name='post'
            value={post}
             type="text" id='post' className='w-full border border-gray-200 rounded-lg mt-1 p-2' />
            {/* <button type='submit' className='w-full rounded-md py-2 mt-2 bg-purple-400 text-white text-xl'>Submit</button> */}
            <Button />
        </form>
      
    </div>
  )
}

export default Formcamp
