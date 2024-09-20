import React from 'react'
import LogoImg from '../../assets/logo-img.png'
import LogoText from '../../assets/logo-text.png'
const SignUpMobile = () => {
  return (
    <div>
      <div className="w-[1440px] h-[100%] relative bg-[#f6f4eb]">
        <div className="w-[521px] h-[775px] left-0 top-0 absolute bg-[#91c8e4]/60 blur-sm" />
        <div className="w-[666px] h-[350px] left-[-55px] top-[-24px] absolute">
          <img className="w-[270px] h-[80%] left-0 top-0 absolute" src={LogoImg} />
          <img className="w-[50%] h-[100%] left-[15%] top-[-12%] absolute" src={LogoText} />
        </div>
        <i class="fa-solid fa-mobile left-[940px] top-[140px] absolute text-black text-[60px]"></i>
        <div className="left-[803px] top-[230px] absolute text-black text-[32px] font-medium font-['Lexend Deca']">Sign Up with Mobile</div>
        <div className="w-[100px] h-[100px] left-[914px] top-[118px] absolute bg-[#d9d9d9]/0 rounded-[10px] border-2 border-black" />
        <div className="left-[785px] top-[300px] absolute text-black text-2xl font-normal font-['Lexend Deca']">Enter Your Number</div>
        <div className="w-[347px] h-10 left-[784px] top-[340px] absolute">
          <div className="w-[347px] h-10 left-0 top-0 absolute bg-white rounded-[10px] border border-black" />
          <div className="left-[7px] top-[9px] absolute text-[#c1bcbc] text-base font-medium font-['Lexend Deca']">  Enter your number</div>
        </div>
        <div className="w-[347px] h-10 left-[784px] top-[470px] absolute">
          <div className="w-[347px] h-10 left-0 top-0 absolute bg-white rounded-[10px] border border-black" />
          <div className="left-[7px] top-[9px] absolute text-[#c1bcbc] text-base font-medium font-['Lexend Deca']">  Enter your OTP</div>
        </div>
        <div className="left-[786px] top-[430px] absolute text-black text-2xl font-normal font-['Lexend Deca']">Enter Your OTP</div>
        <div className="w-[347px] h-10 left-[790px] top-[550px] absolute">
          <div className="w-[347px] h-10 left-0 top-0 absolute bg-[#004eec] rounded-[10px]" />
          <div className="left-[128px] top-[5px] absolute text-[#fbf7f7] text-lg font-medium font-['Lexend Deca']">Continue</div>
        </div>
        <div className="left-[791px] top-[390px] absolute text-[#004eec] text-xl font-normal font-['Lexend Deca'] underline">Verify</div>
        <div className="w-[81px] h-20 left-[923px] top-[210px] absolute" />
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
        <div className="w-[347px] h-[50px] left-[45px] top-[225px] absolute">
          <i class="fa-regular fa-circle-check text-3xl mt-2 text-[#032976]"></i>
          <div className="left-[46px] top-0 absolute text-[#032976] text-lg font-bold font-['Lexend Deca']">Sign Up with Mobile</div>
          <div className="left-[46px] top-[27px] absolute text-[#4C4848] text-lg font-medium font-['Lexend Deca']">Please provide number and verify</div>
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

export default SignUpMobile
