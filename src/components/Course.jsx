import React from "react";
import Parts from "./Parts";

const Course = ({course}) => {
console.log(course);

  
return (
    <div>
      <h2>{course.name}</h2>
  <Parts parts={course.parts} />
    </div>
  );
};

export default Course;
