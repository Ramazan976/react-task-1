import React from 'react'
import { User } from 'lucide-react';
import { SlLock } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import womanImage from './assets/images/womanimg.png'
import bgImage from './assets/images/Rectangle-4.png'
import iconImg from './assets/images/Group-11.png'

const App = () => {
  return (
    <section className='flex items-center justify-center gap-16'>
      <div className='flex flex-col w-[800px] items-center gap-4'>
        <h1 className='font-bold text-3xl'>LOGIN</h1>
        <p className='text-gray-600 text-sm'>How to i get started lorem ipsum dolor at?</p>

        <div className='relative flex items-center w-full max-w-[320px]'>
          <input
            type="text"
            placeholder='Username'
            className='w-full placeholder:text-sm bg-[#F3F1FF] pl-10 h-12 rounded-xl'
          />
          <User className='absolute left-3' size={18} />
        </div>

        <div className='relative flex items-center w-full max-w-[320px]'>
          <input
            type="password"
            placeholder='Password'
            className='w-full placeholder:text-sm bg-[#F3F1FF] h-12 pl-10 rounded-xl'
          />
          <SlLock className='absolute left-3' size={18} />
        </div>

        <button className='w-fit border text-sm p-3 rounded-xl bg-linear-to-t from-[#6651EF] to-[#1877F2] px-6 text-white shadow-xl'>
          Login Now
        </button>

        <div className='relative w-[320px] flex justify-center'>
          <p className='text-sm font-bold before:block before:absolute before:content-[""] before:bg-gray-200 before:w-[100px] before:h-[1px] before:left-0 before:top-3 after:block after:absolute after:content-[""] after:bg-gray-200 after:w-[100px] after:h-[1px] after:right-0 after:top-3'>
            Login <span className='font-light'>with Others</span>
          </p>
        </div>

        <div className='flex gap-2 items-center border justify-center p-2 border-gray-200 rounded-md w-[320px]'>
          <FcGoogle size={20} />
          <p className='text-sm font-light'>Login <span className='font-bold'>with Google</span></p>
        </div>

        <div className='flex gap-2 items-center justify-center border border-gray-200 p-2 rounded-md w-[320px]'>
          <FaFacebookSquare className='text-blue-700' size={20} />
          <p className='text-sm font-light'>Login <span className='font-bold'>with Facebook</span></p>
        </div>
      </div>

      <div className='relative'>
        <img src={bgImage} alt="" className='h-screen w-[800px]' />
        <div className='absolute top-40 left-52 bg-[#8978F3] w-[280px] h-[350px] rounded-2xl'>
          <h1 className='absolute z-30 left-6 top-6 text-white w-[130px] text-2xl font-bold'>
            Very good works are waiting for you Login Now!!!
          </h1>
          <img src={iconImg} alt="" className='absolute z-30 -left-5 bottom-10 w-12' />
          <img src={womanImage} alt="" className='absolute z-20 -right-12 bottom-0 rounded-2xl max-w-[400px] h-[260px] object-cover' />
        </div>
      </div>
    </section>
  )
}

export default App