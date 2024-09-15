import React from 'react'
import LogoImg from '../assets/logo-img.png'
import LogoText from '../assets/logo-text.png'
import fb from '../assets/icons/facebook.png'
import linkedin from '../assets/icons/linkedin.png'
import insta from '../assets/icons/instagram.png'
import '../index.css'
const Footer = () => {
    return (
        <footer className='pl-3 bg-[#D9D9D9] mt-20 mb-[-8%]'>
            <div className='flex items-start gap-16'>
                <div>
                    <div className='flex items-center justify-start'>
                        <img src={LogoImg} className='w-28' />
                        <img src={LogoText} className='w-48 ml-[-25%]' />
                    </div>
                    <h1 className='pl-12 mt-[-20%]'>
                        <span className='text-[#FF3D00] font-bold text-2xl'>Unlock Your</span> <span className='text-[#FFC107] font-bold text-2xl ml-2'>Potential,</span> <br />
                        <span className='text-[#FFC107] font-bold text-2xl m-1'>Learn</span> <span className='text-[#FF3D00] font-bold text-2xl ml-2'>Anytime,</span> <br />
                        <span className='text-[#FF3D00] font-bold text-2xl ml-1'>Anywhere</span>
                    </h1>
                </div>
                <div className='flex items-center gap-16'>
                    <div className='ml-20 mt-16'>
                        <h1 className='text-2xl font-medium'>PRODUCTS</h1>
                        <h1 className='mt-3'>JAVA</h1>
                        <h1 className='mt-1'>.NET DEVELOPER</h1>
                        <h1 className='mt-1'>DATA LEARNING</h1>
                    </div>
                    <div className='ml-20 mt-16'>
                        <h1 className='text-2xl font-medium'>LEGAL</h1>
                        <h1 className='mt-3'>Privacy Policies</h1>
                        <h1 className='mt-1'>Cookies Collection</h1>
                        <h1 className='mt-1'>Terms and Conditions</h1>
                    </div>
                    <div className='ml-20 mt-16'>
                        <h1 className='text-2xl font-medium'>PRODUCTS</h1>
                        <div className='flex gap-2 items-center mt-3'>
                            <img src={fb} className='w-6' />
                            <h1>Facebook</h1>
                        </div>
                        <div className='flex gap-2 items-center mt-3'>
                            <img src={linkedin} className='w-6' />
                            <h1>LinkedIn</h1>
                        </div>
                        <div className='flex gap-2 items-center mt-3'>
                            <img src={insta} className='w-6' />
                            <h1>Instagram</h1>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='mt-5 flex items-center justify-center gap-1 text-sm'>
                <i class="fa-regular fa-copyright"></i>
                Skill Plus 2024, All Rights Reserved
            </h1>
        </footer>
    )
}

export default Footer
