import React from "react";

export default function Days({ timeStamps }) {
  return (
    <div className="Days">
      <div>
        {timeStamps.map((day, index) => {
          return <li key={index}>timeStamps.dt</li>;
        })}
      </div>
    </div>
  );
}
