import React from 'react';

function LeaderboardControls() {
  return (
    <div className="flex flex-wrap gap-5 justify-between md:mt-12 w-full font-bold max-md:mt-5 max-md:max-w-full">
      <div className="flex gap-5 self-start">
        <div className="flex gap-2 text-base whitespace-nowrap rounded-md bg-zinc-300">
          <button className="md:px-6 md:py-2.5 text-[12px] md:text-[16px] text-white bg-[#F1A086] rounded-md max-md:px-3">All</button>
          <button className="my-auto text-zinc-500 px-2 text-[12px] md:text-[16px]">Batch</button>
        </div>
        <div className="flex gap-2">
          <h1 className="my-auto text-base text-white text-[10px] md:text-[16px]">Filter by</h1>
          <select id="filter" className="flex gap-3.5 px-1 md:px-3.5 md:py-3 py-2 text-xs rounded-md bg-[#D9D9D9] text-zinc-500">
            <option>Select All</option>
          </select>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end text-xs md:w-[350px] w-full">
        <input type="text" placeholder="Type username to compare" className="px-3 py-3 rounded-xl w-[100%] bg-zinc-300 text-zinc-500" />
        <button className="px-7 py-3 text-white whitespace-nowrap bg-orange-600 rounded-xl max-md:px-5">Compare</button>
      </div>
    </div>
  );
}

export default LeaderboardControls;