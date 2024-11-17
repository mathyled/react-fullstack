

const Exercise = ({ part }) => {
  console.log(part)
  return (
    <div>
      <li>
        {part.name} {part.exercises}
      </li>
    </div>
  );
};

export default Exercise;
