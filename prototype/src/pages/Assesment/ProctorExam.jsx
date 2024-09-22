import React, { useState } from 'react';
import ProctorSteps from './ProctorSteps';
import ExamImage from './ExamImage';
import { Link } from 'react-router-dom'
import Profile from '../../assets/icons/account.png'
import LogoImg from '../../assets/logo-img.png'
import LogoText from '../../assets/logo-text.png'
import ChatBot from '../../assets/chatbot.png'
import Bot from '../../assets/chatmsg-bot1.png'
import BotMsg from '../../assets/chatbot-msg.png'
import wallpaper from '../../assets/chatbot-msg-wallpaper.png'
function ProctorExam() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)
  return (
    <main>
      {/* Navbar */}
      <nav className='flex justify-between h-[80px] md:gap-5 w-[100%] items-center sticky top-0 z-30 bg-[#F6F4EB] md:h-24 pt-8 md:pt-12'>
        <div className='flex items-start justify-start md:ml-0 ml-[-5%] w-[40%] md:w-[20%]'>
          <img src={LogoImg} className='md:w-[40%] w-[70%]' />
          <img src={LogoText} className='md:w-[70%] md:ml-[-28%] ml-[-45%] mt-[-16%]' />
        </div>
        <ul className='hidden md:flex md:gap-14 font-bold md:justify-center mt-[-4%] w-[25%]'>
          <Link to={'/home'}><a>Home</a></Link>
          <Link to={'/courses'}><a>Courses</a></Link>
          <Link to={'/resources'}><a>Resources</a></Link>
        </ul>
        <div className='text-[#808080] hidden md:gap-2 md:flex items-center justify-start w-[20%] bg-white rounded-xl p-1 pl-2 mt-[-4%]'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input placeholder='search here' className='bg-transparent mt-[-1%] outline-none' />
        </div>
        <div className='w-[35%] hidden font-bold lg:flex lg:items-center lg:justify-end mt-[-4%] lg:gap-5'>
          <div className='w-[35%] font-bold flex items-center justify-end mr-10 gap-5 cursor-pointer' >
            <img src={Profile} onClick={() => { setShowProfile(true) }} className='w-8' />
          </div>
        </div>

        <div className='md:hidden ml-[-15%] mr-5 cursor-pointer' onClick={() => { setShowNavbar(true) }}>
          <i class="fa-solid fa-bars text-2xl mb-9"></i>
        </div>
      </nav>
      {/* Side Navbar */}
      {
        showNavbar ?
          <nav className='start-page w-[50%] absolute right-0 z-30 top-0 h-[780px]'>
            <div className='flex justify-end m-3'>
              <i class="fa-solid fa-xmark text-2xl cursor-pointer text-white" onClick={() => { setShowNavbar(false) }}></i>
            </div>
            <div className='flex ml-[25%] items-center gap-4 mt-56'>
              <h1 className='text-white text-xl'>Home</h1>
            </div>
            <div className='flex ml-[25%] items-center gap-4 mt-8'>
              <h1 className='text-white text-xl'>Courses</h1>
            </div>
            <div className='flex ml-[25%] items-center gap-4 mt-8'>
              <h1 className='text-white text-xl'>Resources</h1>
            </div>
            <div className='w-[45%] font-bold flex items-center justify-end ml-[43%] mt-[110%] lg:gap-5'>
              <div className='w-[35%] font-bold flex items-center justify-end mr-10 gap-2 cursor-pointer' >
                <img src={Profile} onClick={() => { setShowProfile(true) }} className='w-8' />
                <h1 className='text-[#E6B9A6]'>Profile</h1>
              </div>
            </div>
          </nav> : ""
      }

      {/* Profile Sidebar */}
      {
        showProfile ?
          <nav className='start-page md:w-[20%] w-[50%] absolute right-0 z-40 top-0 h-[780px]'>
            <div className='flex justify-end m-3'>
              <i class="fa-solid fa-xmark text-2xl cursor-pointer text-white" onClick={() => { setShowProfile(false) }}></i>
            </div>
            <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-56'>
              <i class="fa-solid fa-chalkboard text-white text-2xl"></i>
              <h1 className='text-white text-xl' style={{ borderBottom: "3px solid white" }}>Learning</h1>
            </div>
            <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-8'>
              <i class="fa-solid fa-ranking-star text-white text-2xl"></i>
              <h1 className='text-white text-xl'>Leaderboard</h1>
            </div>
          </nav> : ""
      }
      <section className="flex flex-col pt-28 px-10 w-full rounded-3xl max-md:pt-24 start-page">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
              <div className="flex z-10 flex-col w-full text-lg font-bold text-white max-md:max-w-full">
                <h1 className="self-start px-9 py-4 text-xl bg-orange-600 rounded-3xl max-md:px-5">
                  Proctoring Mode
                </h1>
                <ProctorSteps />
                <button onClick={()=>{alert("This section is still in developing!")}} className="self-center md:ml-[50%] px-16 py-4 my-20 mr-6 text-3xl whitespace-nowrap bg-sky-400 rounded-3xl max-md:px-5 max-md:mt-10 max-md:mr-2.5">
                  Start
                </button>
              </div>
            </div>
            <ExamImage />
          </div>
        </div>
      </section>
      {/* Chatbot Icon */}
      <img src={ChatBot} className='sticky bottom-0 left-[100%] cursor-pointer z-20' onClick={() => setShowChatbot(true)} />

      {/* Chatbot Message Screen */}
      {
        showChatbot ?
          <div className='w-80 absolute right-0 top-0 pb-2 z-40 bg-[#F6F4EB]'>
            <div className='flex justify-between start-page p-3 items-center'>
              <div className='flex gap-2 items-center'>
                <img src={Bot} className='w-14' />
                <h1 className='text-white'>Skill Bot</h1>
              </div>
              <i class="fa-solid fa-xmark text-white cursor-pointer" onClick={() => setShowChatbot(false)}></i>
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
    </main>
  );
}

export default ProctorExam;