import React from 'react'
import LogoImg from '../assets/logo-img.png'
import LogoText from '../assets/logo-text.png'
import Profile from '../assets/icons/account.png'
import '../index.css'
const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between gap-5 w-[100%] items-center'>
                <div className='flex items-start justify-start w-[20%]'>
                    <img src={LogoImg} className='w-[40%]' />
                    <img src={LogoText} className='w-[70%] ml-[-25%] mt-[-16%]' />
                </div>
                <ul className='flex gap-14 font-bold justify-center mt-[-4%] w-[25%]'>
                    <a className='nav-items'>Home</a>
                    <a>Courses</a>
                    <a>Resources</a>
                </ul>
                <div className='text-[#808080] gap-2 flex items-center justify-start w-[20%] bg-white rounded-xl p-1 pl-2 mt-[-4%]'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input placeholder='search here' className='bg-transparent mt-[-1%] outline-none' />
                </div>
                <div className='w-[35%] font-bold flex items-center justify-end mr-10 mt-[-5%] gap-5 cursor-pointer'>
                    <img src={Profile} className='w-8'/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
