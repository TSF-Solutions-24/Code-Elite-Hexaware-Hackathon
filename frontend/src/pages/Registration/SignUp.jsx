import React from 'react'
import LogoImg from '../../assets/logo-img.png'
import LogoText from '../../assets/logo-text.png'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div>
      <div className="relative bg-[#f6f4eb]">
        <div className="w-[370px] left-[787px] top-[72px] absolute">
          <div className="w-[100px] h-[100px] left-[131px] top-0 absolute">
            <div className="w-[81px] h-[81px] pl-[16.88px] pr-[13.50px] pt-[13.50px] pb-[10.12px] left-[8px] top-[9px] absolute justify-center items-center inline-flex" />
            <div className="w-[90px] h-[80px] left-0 top-0 absolute bg-[#d9d9d9]/0 rounded-[10px] border-2 border-black" />
          </div>
          <i class="fa-solid fa-flag text-5xl absolute top-[13px] left-[42%] text-[#193d4f]"></i>
          <div className="left-[117px] top-[100px] absolute text-black text-[32px] font-medium font-['Lexend Deca']">Sign Up</div>
          <div className="w-[350px] h-[70px] left-0 top-[160px] absolute">
            <div className="w-12 h-12 left-[21px] top-[22px] absolute" />
            <i class="fa-brands fa-google text-3xl left-4 top-2 absolute"></i>
            <div className="left-[65px] top-[5px] absolute text-black text-[26px] font-normal font-['Lexend Deca']">Sign up with Google</div>
            <div className="w-[350px] h-[50px] left-0 top-0 absolute bg-[#d9d9d9]/0 rounded-[10px] border-2 border-black" />
          </div>
          <div className="w-[350px] h-[70px] left-0 top-[230px] absolute">
            <div className="w-12 h-12 left-[21px] top-[22px] absolute" />
            <i class="fa-solid fa-phone text-3xl left-4 top-2 absolute"></i>
            <div className="left-[65px] top-[5px] absolute text-black text-[26px] font-normal font-['Lexend Deca']">Sign up with Mobile</div>
            <div className="w-[350px] h-[50px] left-0 top-0 absolute bg-[#d9d9d9]/0 rounded-[10px] border-2 border-black" />
          </div>
          <div className="w-[359px] h-5 left-[3px] top-[308px] absolute">
            <div className="left-[168px] top-0 absolute text-black text-base font-normal font-['Lexend Deca']">OR</div>
            <div className="w-[150px] h-[0px] left-0 top-[10px] absolute border border-black"></div>
            <div className="w-[150px] h-[0px] left-[209px] top-[10px] absolute border border-black"></div>
          </div>
          <div className="w-[367px] h-[73.31px] left-[3px] top-[332px] absolute">
            <div className="left-[1px] top-0 absolute text-black text-xl font-medium font-['Lexend Deca']">Full Name</div>
            <div className="w-[367px] h-[42.31px] left-0 top-[31px] absolute">
              <div className="w-[367px] h-[42.31px] left-0 top-0 absolute bg-white rounded-[10px] border-2 border-black" />
              <div className="w-[139.61px] h-[21.15px] left-[16.92px] top-[10.58px] absolute text-[#c0bbbb] text-base font-medium font-['Lexend Deca']">Enter your name</div>
            </div>
          </div>
          <div className="left-[3px] top-[490px] absolute">
            <div className="left-[1px] top-0 absolute text-black text-xl font-medium font-['Lexend Deca']">Password</div>
            <div className="w-[367px] h-[42.31px] left-0 top-[31px] absolute">
              <div className="w-[367px] h-[42.31px] left-0 top-0 absolute bg-white rounded-[10px] border-2 border-black" />
              <div className="w-[183px] h-[21px] left-[17px] top-[11px] absolute text-[#c0bbbb] text-base font-medium font-['Lexend Deca']">Enter your password</div>
            </div>
          </div>
          <div className=" left-[3px] top-[412px] absolute">
            <div className="left-[1px] top-0 absolute text-black text-xl font-medium font-['Lexend Deca']">Email</div>
            <div className="w-[367px] h-[42.31px] left-0 top-[31px] absolute">
              <div className="w-[367px] h-[42.31px] left-0 top-0 absolute bg-white rounded-[10px] border-2 border-black" />
              <div className="w-[138.55px] h-[21.16px] left-[16.92px] top-[10.58px] absolute text-[#c0bbbb] text-base font-medium font-['Lexend Deca']">Enter your email</div>
            </div>
          </div>
          <button className='bg-[#004eec] text-white text-2xl p-1 px-[36%] text-center rounded-full absolute top-[580px] left-0'>Continue</button>
        </div>
        <div className="w-[521px] h-[755px] left-0 top-[1px] absolute bg-[#91c8e4]/60 blur-sm" />
        <div className="w-[354px] h-[76px] left-[67px] top-[634px] absolute">
          <div className="w-[354px] h-4 left-5 top-0 absolute text-black text-[24px] font-medium font-['Lexend Deca']">Already have an account?</div>
          <Link to={'/registration/login'}><div className="left-[133px] top-[41px] absolute text-[#004eec] text-[24px] font-medium font-['Lexend Deca'] underline">Login</div></Link>
        </div>
        <div className="w-[666px] h-[350px] left-[-55px] top-[-24px] absolute">
          <img className="w-[270px] h-[80%] left-0 top-0 absolute" src={LogoImg} />
          <img className="w-[50%] h-[100%] left-[15%] top-[-12%] absolute" src={LogoText} />
        </div>
        <div className="w-[444px] h-[205px] left-[45px] top-[300px] absolute">
          <div className="w-[402px] h-[50px] left-0 top-0 absolute">
            <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#797171]"></i>
            <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
            <div className="left-[45px] top-0 absolute text-[#797171] text-lg font-bold font-['Lexend Deca']">Your Details</div>
            <div className="left-[45px] top-[27px] absolute text-[#808080] text-lg font-medium font-['Lexend Deca']">Please provide degree and specification</div>
          </div>
          <div className="w-[444px] h-[50px] left-0 top-[77px] absolute">
            <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#797171]"></i>
            <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
            <div className="left-[45px] top-0 absolute text-[#797171] text-lg font-bold font-['Lexend Deca']">Certifications</div>
            <div className="left-[45px] top-[27px] absolute text-[#808080] text-lg font-medium font-['Lexend Deca']">Please provide certifications and Internships</div>
          </div>
          <div className="w-[368px] h-[50px] left-0 top-[155px] absolute">
            <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#797171]"></i>
            <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
            <div className="left-[45px] top-0 absolute text-[#797171] text-lg font-bold font-['Lexend Deca']">Social Connect</div>
            <div className="left-[45px] top-[27px] absolute text-[#808080] text-lg font-medium font-['Lexend Deca']">Please provide LinkedIn and GitHub</div>
          </div>
        </div>
        <div className="w-full h-[50px] left-[45px] top-[225px] absolute">
          <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#032976]"></i>
          <div className="left-[46px] top-0 absolute text-[#032976] text-lg font-bold font-['Lexend Deca']">Sign Up</div>
          <div className="left-[46px] top-[27px] absolute w-full text-[#4C4848] text-lg font-medium font-['Lexend Deca']">Please provide name and password</div>
          <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
        </div>
        <div className="w-[337px] h-[50px] left-[45px] top-[530px] absolute">
          <div className="w-[35px] h-[35px] p-[2.92px] left-0 top-[3px] absolute justify-center items-center inline-flex" />
          <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#797171]"></i>
          <div className="left-[45px] top-0 absolute text-[#797171] text-lg font-bold font-['Lexend Deca']">Programming Language</div>
          <div className="left-[45px] top-[27px] absolute text-[#808080] text-lg font-medium font-['Lexend Deca']">Please provide Language Known</div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
