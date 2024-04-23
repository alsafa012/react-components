import React, { useState, useEffect } from "react";

const HorizontalProgressBarWithMap = () => {
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
      <h1 className="text-3xl text-center my-2">
        HorizontalProgressBarWithMap
      </h1>
      {data.map((item, ind) => (
        <div key={ind}>
          <div className="flex flex-col w-[300px] mx-auto gap-2 border my-3 py-1">
            <div
              className={`flex h-3 w-full items-center justify-center rounded-full bg-sky-300`}
            >
              <div
                style={{ width: `${progressNumbers[item.technology] || 0}%` }}
                className={`transition-width mr-auto h-3 w-0 rounded-full bg-sky-600 duration-500`}
              ></div>
            </div>
            <span className="text-lg font-medium text-center text-sky-500">
              {item.technology} - {progressNumbers[item.technology] || 0} %
            </span>
            <span
              style={{ marginLeft: `${progressNumbers[item.technology] - 7}%` }}
              className="flex text-lg font-medium  text-sky-500"
            >
              {progressNumbers[item.technology] || 0}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalProgressBarWithMap;
