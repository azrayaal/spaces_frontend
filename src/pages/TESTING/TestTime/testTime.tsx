// import React, { useEffect } from "react";

// function getRealTime(time: any) {
//   let namaBulan = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Des",
//   ];

//   let date = time.getDate();
//   let month = time.getMonth();
//   let year = time.getFullYear();
//   let hours = time.getHours();
//   let minutes = time.getMinutes();

//   console.log(`${date} ${namaBulan[month]} ${year} ${hours}:${minutes} WIB`);
//   return `${date} ${namaBulan[month]} ${year}`;
// }

// function getDistanceTime(time: any) {
//   let timeNow = new Date();
//   let timePost = time;
//   let distanceTime = timeNow - timePost;

//   let distanceDay = Math.floor(distanceTime / (1000 * 3600 * 24));
//   let distanceHour = Math.floor(distanceTime / (1000 * 60 * 60));
//   let distanceMinute = Math.floor(distanceTime / (1000 * 60));
//   let distanceSecond = Math.floor(distanceTime / 1000);

//   if (
//     distanceDay ||
//     distanceHour ||
//     distanceMinute ||
//     distanceSecond == false
//   ) {
//     return `... Ago`;
//   } else if (distanceDay > 0) {
//     return `${distanceDay} days ago`;
//   } else if (distanceHour > 0) {
//     return `${distanceHour} hour ago`;
//   } else if (distanceMinute > 0) {
//     return `${distanceMinute} minute ago`;
//   } else if (distanceSecond > 0) {
//     return `${distanceSecond} second ago`;
//   }
// }

//   useEffect(() => {
//     // timeSince();
//   }, []);
// return <div>TestTime: </div>;
// }
