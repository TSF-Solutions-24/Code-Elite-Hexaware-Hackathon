import React from 'react';

function Header() {
  return (
    <header className="flex z-10 flex-wrap gap-10 ml-3.5 w-full max-w-[1296px] max-md:max-w-full">
      <nav className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex grow text-xl font-medium text-black whitespace-nowrap max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7748123dbd33a9a4ebd9d65d9de1142cb5c4cc2382d1ecb6abd1c7e216a6fd6c?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain grow shrink-0 aspect-[2.46] basis-0 w-fit" />
              <a href="/" className="self-start mt-9">Home</a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-7 items-center self-stretch my-auto w-full text-xl font-medium text-black max-md:mt-10 max-md:max-w-full">
              <a href="/courses" className="self-stretch my-auto">Courses</a>
              <a href="/resources" className="grow shrink self-stretch my-auto w-[84px]">Resources</a>
              <form className="flex gap-2 self-stretch px-5 py-2 bg-white rounded-[30px] text-zinc-500">
                <label htmlFor="search" className="sr-only">Search</label>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/da0f2083d750cb487cfdff7642ea5d5749034350ec9f4e38b9d1ca87fb1a8c13?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 self-start w-6 aspect-square" />
                <input type="search" id="search" placeholder="search here" className="basis-auto bg-transparent border-none focus:outline-none" />
              </form>
            </div>
          </div>
        </div>
      </nav>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ba24f5c7a177ce6fe18a3b007111701a988f17cd4d9fb99df4e24eb2a77e926?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="User profile" className="object-contain shrink-0 my-auto aspect-square w-[45px]" />
    </header>
  );
}

export default Header;