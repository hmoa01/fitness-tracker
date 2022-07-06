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
        label:"First Dataset",
        data: weights,
        backgroundColor:'red',
        borderColor:'black',
        tension:0.4,
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
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