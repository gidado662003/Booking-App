import React, { useEffect, useState } from "react";

function Booking() {
  const currentDate = new Date();

  const allDays = [...Array(7)].reduce((acc, _, index) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + index);
    const dayName = newDate.toLocaleDateString("default", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    acc[dayName] = "";

    return acc;
  }, {});

  const [selectedDay, setSelectedDay] = useState<string>("");
  const [daysBooked, setDaysBooked] = useState(allDays);
  const [selectedTime, setSelectedTime] = useState<string>();
  const [toggleTimesVisible, setToggleTimesVisible] = useState<boolean>(false);

  const handleBooking = (time: any) => {
    setDaysBooked((prev: any) => ({ ...prev, [selectedDay]: time }));
  };

  useEffect(() => {
    console.log(daysBooked);
  }, [daysBooked]);

  const timeSlots = {
    weekDay: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
    weekend: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
  };

  const [selectedSlot, setSelectedSlot] = useState<string[]>([]);

  const handleTime = (day: any) => {
    setSelectedDay(day);

    if (day.includes("Sat") || day.includes("Sun")) {
      setSelectedSlot(timeSlots.weekend);
    } else {
      setSelectedSlot(timeSlots.weekDay);
    }
    setToggleTimesVisible(true); // Show time slots when a day is clicked
  };

  return (
    <div className="p-4 space-y-6 ">
      {/* Day selection */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
        {Object.keys(allDays).map((day, index) => {
          return (
            <div key={index} className="text-center">
              <button
                className={`py-2 px-4 rounded-lg shadow-lg font-semibold transition-all duration-300 ease-in-out transform-gpu ${
                  selectedDay === day
                    ? "bg-blue-500 text-white shadow-blue-300 dark:bg-blue-700"
                    : "bg-white text-slate-500 border border-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600"
                } hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-md dark:hover:bg-blue-800`}
                onClick={() => {
                  handleTime(day);
                }}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>

      {/* Time selection */}
      <div
        className={`flex justify-center gap-4 transition-opacity duration-300 ease-in-out ${
          toggleTimesVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {selectedSlot.map((time, index) => (
          <div className="px-3" key={index}>
            <button
              className={`py-2 px-6 rounded-lg shadow-lg font-medium transition-transform transform-gpu duration-300 ease-in-out ${
                daysBooked[selectedDay] === time
                  ? "bg-green-400 text-white shadow-green-300 dark:bg-green-600"
                  : "bg-white text-slate-600 border border-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600"
              } hover:bg-green-500 hover:text-white hover:scale-110 hover:shadow-lg dark:hover:bg-green-700`}
              onClick={() => {
                handleBooking(time);
                setSelectedTime(time);
              }}
            >
              {time}
            </button>
          </div>
        ))}
      </div>

      {/* Toggle button (Close) */}
      {toggleTimesVisible && (
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={() => {
            setToggleTimesVisible(false);
            setSelectedDay("");
          }}
        >
          <div className="text-slate-500 text-3xl hover:text-red-500 transition-all duration-300 ease-in-out dark:text-slate-200 dark:hover:text-red-400">
            ✕
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
