import React from 'react';

const leaderboardData = [
  { rank: 1, user: "Lufiya", score: "100.00", time: "6782:19:42" , url:"https://cdn.builder.io/api/v1/image/assets/TEMP/314c9bc99224e404da8cc02b53178ade51fb8d9db1f4a77ca7846481a7d35c08?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75"},
  { rank: 1, user: "Sameena", score: "100.00", time: "7167:38:55",url:"https://cdn.builder.io/api/v1/image/assets/TEMP/314c9bc99224e404da8cc02b53178ade51fb8d9db1f4a77ca7846481a7d35c08?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75"},
  { rank: 1, user: "Firas", score: "100.00", time: "7221:21:40",url:"https://cdn.builder.io/api/v1/image/assets/TEMP/314c9bc99224e404da8cc02b53178ade51fb8d9db1f4a77ca7846481a7d35c08?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" },
  { rank: 1, user: "Thasreef", score: "100.00", time: "7335:16:38", url:"https://cdn.builder.io/api/v1/image/assets/TEMP/314c9bc99224e404da8cc02b53178ade51fb8d9db1f4a77ca7846481a7d35c08?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" },
  { rank: 1, user: "Agnel John", score: "100.00", time: "7386:08:06", url:"https://cdn.builder.io/api/v1/image/assets/TEMP/314c9bc99224e404da8cc02b53178ade51fb8d9db1f4a77ca7846481a7d35c08?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" }
];

function LeaderboardTable() {
  return (
    <section className="flex relative z-10 flex-col flex-wrap gap-10 items-start self-stretch md:px-16 pt-10 pb-20 mt-16 -mb-8 w-full text-white min-h-[678px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
      <table className='md:w-full'>
        <tr className='md:text-3xl text-[16px] h-20' style={{borderBottom:"solid 1px white"}}>
          <th>RANK</th>
          <th>USER</th>
          <th>SCORE</th>
          <th>TIME</th>
          <th>COUNTRY</th>
        </tr>
        {
          leaderboardData.map((items,key)=>{
            return(
              <tr className='text-center text-[14px] md:text-2xl h-32' style={{borderBottom:"solid 1px white"}}>
                <td>{items.rank}</td>
                <td>{items.user}</td>
                <td>{items.score}</td>
                <td>{items.time}</td>
                <td>INDIA</td>
              </tr>
            )
          })
        }
      </table>
    </section>
  );
}

export default LeaderboardTable;