import React, { useState } from 'react'
import LogoImg from '../assets/logo-img.png'
import LogoText from '../assets/logo-text.png'
import { Link } from 'react-router-dom'
import Profile from '../assets/icons/account.png'
import Footer from '../components/Footer'
import ChatBot from '../assets/chatbot.png'
import Bot from '../assets/chatmsg-bot1.png'
import BotMsg from '../assets/chatbot-msg.png'
import wallpaper from '../assets/chatbot-msg-wallpaper.png'
import CoursePage from '../components/courses/CoursesPage'
const Courses = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [showChatbot, setShowChatbot] = useState(false)
    return (
        <div>
            {/* Navbar */}
            <nav className='flex justify-between h-[80px] md:gap-5 w-[100%] items-center sticky top-0 z-40 bg-[#4682A9] md:h-24 pt-8 md:pt-12'>
                <div className='flex items-start justify-start md:ml-0 ml-[-5%] w-[40%] md:w-[20%] bg-[#91C8E4]'>
                    <img src={LogoImg} className='md:w-[40%] w-[70%]' />
                    <img src={LogoText} className='md:w-[70%] md:ml-[-28%] ml-[-45%] mt-[-16%]' />
                </div>
                <ul className='hidden md:flex md:gap-14 font-bold md:justify-center mt-[-4%] w-[25%]'>
                    <Link to={'/home'}><a>Home</a></Link>
                    <a className='nav-items'>Courses</a>
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
                    <nav className='start-page w-[50%] absolute right-0 z-50 top-0 h-[780px]'>
                        <div className='flex justify-end m-3'>
                            <i class="fa-solid fa-xmark text-2xl cursor-pointer text-white" onClick={() => { setShowNavbar(false) }}></i>
                        </div>
                        <Link to={'/home'}>
                            <div className='flex ml-[25%] items-center gap-4 mt-56'>
                                <h1 className='text-white text-xl'>Home</h1>
                            </div>
                        </Link>
                        <div className='flex ml-[25%] items-center gap-4 mt-8'>
                            <h1 className='text-white text-xl' style={{ borderBottom: "3px solid white" }}>Courses</h1>
                        </div>
                        <Link to={'/resources'}>
                            <div className='flex ml-[25%] items-center gap-4 mt-8'>
                                <h1 className='text-white text-xl'>Resources</h1>
                            </div>
                        </Link>
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
                    <nav className='start-page md:w-[20%] w-[50%] absolute right-0 z-50 top-0 h-[780px]'>
                        <div className='flex justify-end m-3'>
                            <i class="fa-solid fa-xmark text-2xl cursor-pointer text-white" onClick={() => { setShowProfile(false) }}></i>
                        </div>
                        <Link to={'/videos'}>
                            <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-56'>
                                <i class="fa-solid fa-chalkboard text-white text-2xl"></i>
                                <h1 className='text-white text-xl'>Learning</h1>
                            </div>
                        </Link>
                        <Link to={'/leaderboard'}>
                            <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-8'>
                                <i class="fa-solid fa-ranking-star text-white text-2xl"></i>
                                <h1 className='text-white text-xl'>Leaderboard</h1>
                            </div>
                        </Link>
                    </nav> : ""
            }

            {/* Courses Section */}
            <CoursePage />

            {/* Chatbot Icon */}
            <img src={ChatBot} className='sticky bottom-0 left-[100%] cursor-pointer z-40' onClick={() => setShowChatbot(true)} />

            {/* Chatbot Message Screen */}
            {
                showChatbot ?
                    <div className='w-80 absolute right-0 top-0 pb-2 z-50 bg-[#F6F4EB]'>
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

            {/* Footer Section */}
            <Footer />

        </div>
    )
}

export default Courses
