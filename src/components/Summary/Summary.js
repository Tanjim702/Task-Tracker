import Add from "./Add";
import Chart from "react-apexcharts";
function Summary({ totalAmounts }) {
  const data = {
    options: {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: Object.keys(totalAmounts)
      }
    },
    series: [
      {
        name: "Totals",
        data: Object.keys(totalAmounts).map(key => totalAmounts[key])
      }
    ]
  }
  console.log(totalAmounts)
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Chart
          options={data.options}
          series={data.series}
          type='bar' width='400'
          height='400' />
      </div>
      <div>
        <Add />
      </div>
    </>
  );
}

export default Summary;