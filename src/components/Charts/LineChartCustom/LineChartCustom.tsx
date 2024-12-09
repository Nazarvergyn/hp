import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartCustom = () => {
  const chartRef = useRef<ChartJS<'line'> | null>(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Area Chart Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: '#5C4BF0',
        borderWidth: 1,
        tension: 0.1,
        type: 'line' as const, // Ensure 'line' is correctly typed as a constant
      },
      {
        label: 'Dashed Line Data',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: '#E98013',
        borderWidth: 2,
        borderDash: [10, 5],
        tension: 0.1,
        type: 'line' as const, // Ensure 'line' is correctly typed as a constant
      },
    ],
  };

  const options = {
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
        grid: {
          color: 'rgba(61, 63, 69, 0.80)',
          borderDash: [5, 5],
        },
        ticks: {
          color: '#D5D6D7',
        },
      },
      y: {
        grid: {
          color: 'rgba(61, 63, 69, 0.80)',
          borderDash: [5, 5],
        },
        ticks: {
          color: '#D5D6D7',
        },
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, []);

  return (
    <div
      style={{ background: "linear-gradient(135deg, rgba(37, 39, 46, 0.24) 0%, rgba(37, 39, 46, 0.50) 50%, rgba(37, 39, 46, 0.24) 100%)" }}
      className='p-4 md:p-6 w-full flex flex-col gap-8 rounded-2xl border border-solid border-[rgba(61,63,69,0.56)]'
    >
      <Line height={185} data={data} options={options} ref={chartRef} />
    </div>
  );
};

export default LineChartCustom;
