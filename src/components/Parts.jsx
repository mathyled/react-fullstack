import React from "react";
import Exercise from "./Exercise";

const Parts = ({parts}) => {
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <Exercise key={part.id} part={part} />
        ))}
      </ul>
      <strong>Total of {parts.reduce( (acc ,current) => acc + (current.exercises),0 )} exercises</strong>
    </div>
  );
};


export default Parts;
