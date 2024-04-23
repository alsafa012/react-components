// import React, { useState, useEffect } from "react";
// const CircleProgressBarWithMap = () => {
//   const [progressNumbers, setProgressNumbers] = useState({});

//   const data = [
//     { technology: "react", ProgressNumberPercent: 50 },
//     { technology: "html", ProgressNumberPercent: 90 },
//     { technology: "css", ProgressNumberPercent: 60 },
//     { technology: "js", ProgressNumberPercent: 20 },
//   ];

//   useEffect(() => {
//     const intervals = data.map((item) => {
//       return setInterval(() => {
//         setProgressNumbers((prevNumbers) => {
//           const currentProgress = prevNumbers[item.technology] || 0;
//           const targetProgress = item.ProgressNumberPercent;

//           if (currentProgress < targetProgress) {
//             return {
//               ...prevNumbers,
//               [item.technology]: currentProgress + 1,
//             };
//           } else {
//             clearInterval(intervals[item.technology]);
//             return prevNumbers;
//           }
//         });
//       }, 30); // Adjust the interval as per your requirement
//     });

//     return () => {
//       intervals.forEach((interval) => clearInterval(interval));
//     };
//   }, []);

//   return (
//     <div>
//       {data.map((item, ind) => (
//         <div key={ind}>
//           <div className="flex flex-col w-[200px] mx-auto gap-2">
//             <svg
//               width="100"
//               height="100"
//               viewBox="0 0 100 100"
//               className="mx-auto"
//             >
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="45"
//                 fill="none"
//                 stroke="#e0e0e0"
//                 strokeWidth="8"
//               />
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="45"
//                 fill="none"
//                 stroke="#0070f3"
//                 strokeWidth="8"
//                 strokeDasharray={`${progressNumbers[item.technology] || 0 * 2.83},283`}
//                 strokeLinecap="round"
//                 transform="rotate(-90 50 50)"
//               />
//               <text
//                 x="50%"
//                 y="50%"
//                 dominantBaseline="middle"
//                 textAnchor="middle"
//                 fontSize="16"
//                 fill="#0070f3"
//               >
//                 {item.technology}
//               </text>
//             </svg>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CircleProgressBarWithMap;

import React, { useState, useEffect } from "react";

const CircleProgressBarWithMap = () => {
  const [progressNumbers, setProgressNumbers] = useState({});

  const data = [
    { technology: "react", ProgressNumberPercent: 50 },
    { technology: "html", ProgressNumberPercent: 90 },
    { technology: "css", ProgressNumberPercent: 60 },
    { technology: "js", ProgressNumberPercent: 20 },
  ];

  useEffect(() => {
    const intervals = data.map((item) => {
      return setInterval(() => {
        setProgressNumbers((prevNumbers) => {
          const currentProgress = prevNumbers[item.technology] || 0;
          const targetProgress = item.ProgressNumberPercent;

          if (currentProgress < targetProgress) {
            return {
              ...prevNumbers,
              [item.technology]: currentProgress + 1,
            };
          } else {
            clearInterval(intervals[item.technology]);
            return prevNumbers;
          }
        });
      }, 30); // Adjust the interval as per your requirement
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center my-2">CircleProgressBarWithMap</h1>
      <div className="flex justify-center items-center gap-5">
        {data.map((item, ind) => (
          <div key={ind}>
            <div className="flex flex-col w-[200px] mx-auto gap-2">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="mx-auto"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#0070f3"
                  strokeWidth="8"
                  strokeDasharray={`${
                    progressNumbers[item.technology] || 0 * 2.83
                  },283`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="16"
                  fill="#0070f3"
                >
                  {item.technology} - {progressNumbers[item.technology] || 0} %
                </text>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleProgressBarWithMap;
