import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 80, 81, 56],
        backgroundColor: '#5C4BF0',
        borderColor: '#5C4BF0',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const, 
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#D5D6D7',
        },
      },
      y: {
        grid: {
          color: 'rgba(61, 63, 69, 0.2)',
        },
        ticks: {
          color: '#D5D6D7',
        },
      },
    },
  };

  return (
    <div
      style={{ background: "linear-gradient(135deg, rgba(37, 39, 46, 0.24) 0%, rgba(37, 39, 46, 0.50) 50%, rgba(37, 39, 46, 0.24) 100%)" }}
      className='p-4 md:p-6 w-full flex flex-col gap-8 rounded-2xl border border-solid border-[rgba(61,63,69,0.56)]'
    >
      <Bar height={185} data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;