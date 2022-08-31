import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
import "./Chart.css";
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function LineChart({weights, labels}) {
  const data = {
    labels,
    datasets:[
      {
        label:"Your Weight",
        data: weights,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension:0.4,
        fill:true,
        pointStyle:'circle',
        pointBorderColor:"rgba(75,192,192,1)",
        pointBackgroundColor:"rgba(75,192,192,1)",
        showLine:true
      }  
    ]
  }
  
  return (
    <div className='chart'>
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default LineChart;