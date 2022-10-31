import React from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export default function Date({ currentDate }) {
  const day = getDayOfWeek(currentDate);

  let hours = currentDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}

// js function not reat component (functions always in lower case to avaiod confusion)
// js function can return a string for eg whereas react returns a component
export function getDayOfWeek(dateObject) {
  return days[dateObject.getDay()];
}
