import StatisticLine from "./StatisticLine";


const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  
  if (total === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }

    return (
      <>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average.toFixed(2)} />
      <StatisticLine text="positive" value={positivePercentage.toFixed(2)} />

    </>
  );
};

export default Statistics;
