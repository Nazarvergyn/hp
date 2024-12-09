import incomeIcon from '../../../assets/images/income-icon.svg';

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
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import LogoWrapper from '../../UI/LogoWrapper/LogoWrapper';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Period = '1d' | '1m' | '1y' | '5y';

const dataSets: Record<Period, { labels: string[], datasets: { label: string, data: number[], borderColor: string, borderWidth: number, backgroundColor: string, fill: boolean, stepped: boolean }[] }> = {
  '1d': {
    labels: ['1st', '5th', '10th', '15th', '20th', '25th', '30th'],
    datasets: [
      {
        label: '1 Day',
        data: [10, 12, 30, 43, 11, 89, 70],
        borderColor: '#5C4BF0',
        borderWidth: 2,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        stepped: true,
      },
    ],
  },
  '1m': {
    labels: ['1st', '5th', '10th', '15th', '20th', '25th', '30th'],
    datasets: [
      {
        label: '1 Month',
        data: [10, 20, 30, 40, 50, 60, 70],
        borderColor: '#5C4BF0',
        borderWidth: 2,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        stepped: true,
      },
    ],
  },
  '1y': {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '1 Year',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        borderColor: '#5C4BF0',
        borderWidth: 2,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        stepped: true,
      },
    ],
  },
  '5y': {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: '5 Years',
        data: [10, 30, 50, 70, 90],
        borderColor: '#5C4BF0',
        borderWidth: 2,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        stepped: true,
      },
    ],
  },
};

const SteppedChartCustom = () => {
  const [selectedData, setSelectedData] = useState(dataSets['1d']);
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("1d");

  const handleButtonClick = (period: Period) => {
    setSelectedData(dataSets[period]);
    setSelectedPeriod(period);
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
          color: 'rgba(61, 63, 69, 0.80)', // color of grid lines OX axis
          borderDash: [5, 5],
        },
        ticks: {
          color: '#D5D6D7', // color of OX axis labels
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#D5D6D7', // color of OY axis labels
        },
      },
    },
  };

  return (
    <div
      style={{ background: "linear-gradient(135deg, rgba(37, 39, 46, 0.24) 0%, rgba(37, 39, 46, 0.50) 50%, rgba(37, 39, 46, 0.24) 100%)" }}
      className='p-4 md:p-6 w-full flex flex-col gap-8 rounded-2xl border border-solid border-[rgba(61,63,69,0.56)]'
    >
      <div className='flex flex-col sm:flex-row sm:items-center gap-6 justify-between'>
        <div className='flex flex-col gap-1.5'>
          <span className='text-secondaryText font-semibold leading-[150%]'>Estimated balance:</span>
          <div className='flex items-center gap-4'>
            <p className='text-baseText text-xl sm:text-2xl md:text-[32px] font-semibold leading-[125%]'>400,080</p>
            <div className='flex items-center gap-2'>
              <LogoWrapper type="square" />
              <p className='text-baseText text-sm font-semibold leading-[140%]'>Prostate AI</p>
            </div>
          </div>
          <span className='text-baseText font-medium leading-[150%]'>≈$850.024</span>
          <div className='mt-2 flex items-center gap-3'>
            <span className='text-secondaryText text-sm font-semibold leading-[170%]'>PNL for today:</span>
            <div className='flex items-center gap-1'>
              <img src={incomeIcon} alt="income icon" />
              <span className='text-success text-sm font-semibold leading-[170%]'>+$1.15(3.82%)</span>
            </div>
          </div>
        </div>

        <div className='flex gap-4'>
          <button onClick={() => handleButtonClick('1d')} className={`p-2 rounded-lg transition-all duration-300 text-secondaryText text-sm font-semibold leading-[170%] ${selectedPeriod === "1d" ? "bg-baseBorder" : ""}`}>1D</button>
          <button onClick={() => handleButtonClick('1m')} className={`p-2 rounded-lg transition-all duration-300 text-secondaryText text-sm font-semibold leading-[170%] ${selectedPeriod === "1m" ? "bg-baseBorder" : ""}`}>1M</button>
          <button onClick={() => handleButtonClick('1y')} className={`p-2 rounded-lg transition-all duration-300 text-secondaryText text-sm font-semibold leading-[170%] ${selectedPeriod === "1y" ? "bg-baseBorder" : ""}`}>1Y</button>
          <button onClick={() => handleButtonClick('5y')} className={`p-2 rounded-lg transition-all duration-300 text-secondaryText text-sm font-semibold leading-[170%] ${selectedPeriod === "5y" ? "bg-baseBorder" : ""}`}>5Y</button>
        </div>
      </div>

      <Line height={75} data={selectedData} options={options} />
    </div>
  );
};

export default SteppedChartCustom;
