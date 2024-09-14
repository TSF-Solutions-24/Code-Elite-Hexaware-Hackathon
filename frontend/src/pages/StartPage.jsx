import React, { useState } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import Tick from '../assets/icons/checkmark.png'
import Section1 from '../assets/startpage1.png'
import ChatBot from '../assets/chatbot.png'
import Company from '../assets/company-specific.png'
import Book from '../assets/book-img.png'
import Book1 from '../assets/best1.png'
import Book2 from '../assets/best2.png'
import Book3 from '../assets/best3.png'
import Bot from '../assets/chatmsg-bot1.png'
import BotMsg from '../assets/chatbot-msg.png'
import wallpaper from '../assets/chatbot-msg-wallpaper.png'
import '../index.css'
import Footer from '../components/Footer'
const StartPage = () => {
  const [showChatbot, setShowChatbot] = useState(false)
  return (
    <div className='z-2'>
      <NavbarLogin />
      <section className='start-page mx-10 rounded-2xl relative'>
        <h1 className='pt-28  pl-28 heading'>
          <span className='text-[#FF3D00] font-bold text-4xl'>Unlock Your</span> <span className='text-[#FFC107] font-bold text-4xl ml-2'>Potential,</span> <br />
          <span className='text-[#FFC107] font-bold text-4xl m-1'>Learn</span> <span className='text-[#FF3D00] font-bold text-4xl ml-2'>Anytime,</span> <br />
          <span className='text-[#FF3D00] font-bold text-4xl ml-1'>Anywhere</span>
        </h1>
        <div className='text-white pl-28 pt-10 w-[40%]'>
          <p>Navigate through a wide range of courses, certifications, and resources designed to help you achieve your goals. From beginner to expert, we’ve got something for everyone.</p>
        </div>
        <div className='pb-24 pl-8'>
          <div className='flex items-center gap-5 pl-20 mt-5'>
            <img src={Tick} className='w-6' />
            <h1 className='text-white text-lg font-semibold'>Courses and Certifications</h1>
          </div>
          <div className='flex items-center gap-5 pl-20 mt-5'>
            <img src={Tick} className='w-6' />
            <h1 className='text-white text-lg font-semibold'>Data Structures & Algorithms</h1>
          </div>
          <div className='flex items-center gap-5 pl-20 mt-5'>
            <img src={Tick} className='w-6' />
            <h1 className='text-white text-lg font-semibold'>Company-specific Questions</h1>
          </div>
          <div className='flex items-center gap-5 pl-20 mt-5'>
            <img src={Tick} className='w-6' />
            <h1 className='text-white text-lg font-semibold'>Training and Process Tracking</h1>
          </div>
        </div>
        <img src={Section1} className='absolute top-36 right-0' />
      </section>
      <section className='mt-7 mx-10 relative flex gap-10'>
        <div className='bg-[#4682A9] w-[60%] flex gap-5 rounded-2xl pb-[7%]'>
          <h1 className='text-white text-3xl w-[50%] font-medium p-10 pl-12 pt-28'>Company - Specific Courses</h1>
          <img src={Company} className='absolute right-[44%]' />
        </div>
        <div className='bg-[#4682A9] w-[60%] flex gap-5 rounded-2xl'>
          <img src={Book} className='mt-10' alt="" />
          <div>
            <h1 className='font-medium text-xl mt-16'>"The Best Things in Life are Free, <br /> The Second Best are very Expensive"</h1>
            <div className='flex items-center justify-start'>
              <div className='flex flex-col items-center mt-10'>
                <img src={Book1} alt="" />
                <h1 className='text-lg ml-3 font-semibold'>Articles</h1>
              </div>
              <div className='flex flex-col items-center mt-9'>
                <img src={Book2} alt="" />
                <h1 className='text-lg ml-3 font-semibold'>Test</h1>
              </div>
              <div className='flex flex-col items-center mt-12'>
                <img src={Book3} alt="" />
                <h1 className='text-lg ml-3 font-semibold'>Videos</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <img src={ChatBot} className='sticky bottom-0 left-[100%] cursor-pointer' onClick={() => setShowChatbot(true)} />
      {
        showChatbot ?
          <div className='w-80 absolute right-0 top-0 pb-2 z-20 bg-[#F6F4EB]'>
            <div className='flex justify-between start-page p-3 items-center'>
              <div className='flex gap-2 items-center'>
                <img src={Bot} className='w-14' />
                <h1 className='text-white'>Skill Bot</h1>
              </div>
              <i class="fa-solid fa-xmark text-white cursor-pointer" onClick={()=> setShowChatbot(false)}></i>
            </div>
            <div className='flex justify-start mt-10 items-center'>
              <img src={Bot} className='w-14' />
              <img src={BotMsg} />
            </div>
            <img src={wallpaper} />
            <div className='flex items-center justify-between mt-10 mb-2 mx-2'>
              <input placeholder='Type your queires here!' className='p-2 pr-24 outline-none border bottom-1 border-black rounded-full text-[70%]' />
              <div className='p-1 px-2 start-page rounded-full'>
                <i class="fa-solid fa-paper-plane text-white cursor-pointer"></i>
              </div>
            </div>
          </div> : ""
      }
    </div>
  )
}

export default StartPage
