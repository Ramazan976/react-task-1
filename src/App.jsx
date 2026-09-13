import React from 'react'
import { User } from 'lucide-react';
import { SlLock } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import womanImage from '../src/assets/images/womanimg.png'
import bgImage from '../src/assets/images/Rectangle-4.png'
import iconImg from '../src/assets/images/Group-11.png'


const App = () => {
  return (
    <section className='flex h-screen  items-center'>
      <div className='flex flex-col w-[500px] items-center gap-3'>
        <h1 className='font-bold text-2xl'>LOGIN</h1>
        <p className='text-gray-600 text-[12px]'>How to i get started lorem ipsum dolor at?</p>
        <div className='relative flex items-center'>
          <input type="text" placeholder='Username' className='w-[250px] placeholder:text-[10px] bg-[#F3F1FF] pl-7 h-9 rounded-xl' />
          <User className='absolute left-2' size={14} />
        </div>
        <div className='relative flex items-center'>
          <input type="password" name='' id='' placeholder='Password' className='w-[250px] placeholder:text-[10px] bg-[#F3F1FF] h-9 pl-7 rounded-xl' />
          <SlLock className='absolute left-2' size={14} />
        </div>
        <button className='w-fit border text-[10px] p-2 rounded-xl bg-linear-to-t from-[#6651EF] to-[#1877F2] pl-4 pr-4 text-white shadow-xl'>Login Now</button>
        <div className='relative w-[250px] flex justify-center '>
        <p className='text-[10px] font-bold before:block before:absolute before:content-[""] before:bg-gray-100 before:w-[85px] before:h-[1px] before:left-0 before:top-2 after:block after:absolute after:content-[""] after:bg-gray-100 after:w-[85px] after:h-[1px] after:right-0 after:top-2' >Login <span className='font-light'>with Others</span></p>
        </div>
        <div className='flex gap-2 items-center border justify-center p-1 border-gray-200 rounded-md w-[250px]'>
          <FcGoogle />
          <p className='text-[8px] font-light'>Login <span className='font-bold'>with Google</span></p>
        </div>
        <div className='flex gap-2 items-center justify-center border border-gray-200 p-1 rounded-md w-[250px]'>
          <FaFacebookSquare className='text-blue-700' />
          <p className='text-[8px] font-light'>Login <span className='font-bold'>with Facebook</span></p>
        </div>
      </div>
      <div className='relative'>
        <img src={bgImage} alt="" className='h-screen w-[600px]' />
        <div className='absolute top-20 left-40 bg-[#8978F3] w-[200px] h-[300px] rounded-2xl'>
        <h1 className='absolute z-30 left-5 top-5 text-white w-[100px] font-bold'>Very good
          works are
          waiting for
          you Login
          Now!!!</h1>
        <img src={iconImg} alt="" className='absolute z-30 -left-5 bottom-10  w-10' />
        <img src={womanImage} alt="" className='absolute z-20 -right-12 bottom-0 rounded-2xl max-w-[360px] h-[250px]' />
        </div>

      </div>
    </section>
  )
}

export default App
