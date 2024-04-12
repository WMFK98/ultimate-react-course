import { useState, useEffect } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [standardTime, setStandardTime] = useState(0);
  const [data, setData] = useState<Date>();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysInWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(function () {
    (async () => {
      try {
        const response = await fetch(
          "http://worldtimeapi.org/api/timezone/Asia/Bangkok"
        );
        const data = await response.json();
        const utc = new Date(data.utc_datetime);
        setData(utc);
        setStandardTime(utc.valueOf());
      } catch (error) {
        console.error("Error fetching time:", error);
        throw error;
      }
    })();
  }, []);

  const caldate = () => {
    const increaseTime = count * step * 24 * 60 * 60 * 1000;
    setData(new Date(standardTime + increaseTime));
  };

  useEffect(caldate, [count, step]);

  return (
    <>
      <div className="justify-center flex">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-2">
            <button onClick={() => setStep(step - 1)}>-</button>{" "}
            <p>Step: {step}</p>
            <button onClick={() => setStep(step + 1)}>+</button>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>

          <p>
            {count * step ? `${count * step} days from today` : "Today "} is{" "}
            {daysInWeek[data?.getDay() ?? 0]} {months[data?.getMonth() ?? 0]}{" "}
            {data?.getDate()} {data?.getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
