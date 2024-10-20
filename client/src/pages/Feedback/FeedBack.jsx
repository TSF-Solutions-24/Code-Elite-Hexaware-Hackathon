import React from 'react'
import feedback from '../../assets/icons/feedback.png'
import { Link } from 'react-router-dom'
const FeedBack = () => {
    return (
        <div className='start-page w-[1536px] flex justify-center items-center h-[775px]'>
            <div className='bg-white p-5 flex flex-col w-[40%] h-[500px]'>
                <div className='flex gap-5 items-center'>
                    <img src={feedback} className='w-14' alt="" />
                    <h1 className='text-3xl font-bold'>Thank You for using Skill Plus</h1>
                </div>
                <h1 className='font-medium my-5'>How likely to rate our website from Rate 1-10</h1>
                <input type="number" className='w-[50%] outline-none text-sm border border-black px-2 p-1' placeholder='Rate your experience fron 1-10' />
                <h1 className='font-medium my-5'>Let us know to improve our website</h1>
                <textarea name="" className='border border-black w-[50%] h-[150px] p-2 text-sm' placeholder='Share your thoughts about our website' id=""/>
                <Link to={'https://forms.gle/iQUqiXu5xDD33B2Q9'}>
                    <button className='px-3 p-2 mt-10 text-white bg-blue-600 rounded-sm'>Give FeedBack</button>
                </Link>
            </div>
        </div>
    )
}

export default FeedBack
