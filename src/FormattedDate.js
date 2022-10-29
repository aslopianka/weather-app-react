import React from "react";

export default function Date({ currentDate }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];
  // const month = props.date.getMonth();
  let hours = currentDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  // console.log(props.currentDate.toDateString());
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
