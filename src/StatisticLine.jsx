










const StatisticLine = ({ text, value }) => {

return (
    <>
<table>
  <tr>
    <td>{text}</td>
    <td>{text === "positive" ? `${value}%` : value }</td>
  </tr>
</table>
</>
);

};

export default StatisticLine;
