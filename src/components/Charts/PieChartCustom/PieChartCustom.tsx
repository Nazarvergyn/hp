import { PieChart } from '@mui/x-charts/PieChart';

const PieChartCustom = () => {
  const data = [
    { id: '2024', value: 50.82 },
    { id: '2023', value: 24.51 },
    { id: '2022', value: 15 },
    { id: '2021', value: 8 },
  ];

  const colors = ['#3D3F45', '#A8C5DA', '#FF9500', '#5C4BF0'];

  return (
    <div
      style={{background: "linear-gradient(135deg, rgba(37, 39, 46, 0.24) 0%, rgba(37, 39, 46, 0.50) 50%, rgba(37, 39, 46, 0.24) 100%)"}}
      className='p-4 md:p-6 w-full flex flex-col gap-8 rounded-2xl border border-solid border-[rgba(61,63,69,0.56)]'
    >
      <h3 className='text-baseText text-2xl font-bold leading-[130%]'>MVP Probability:</h3>

      <div className="flex flex-col sm:flex-row items-center gap-10">
        <div>
        <PieChart
          series={[
            {
              data,
              innerRadius: 50,
              outerRadius: 90,
              paddingAngle: 2,
              cornerRadius: 4,
              cx: 90,
              cy: 90,
            },
          ]}
          colors={colors}
          width={200}
          height={200}
        />
      </div>

      <div className='w-full flex justify-between'>
        <ul className="flex flex-col gap-1">
          {data.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div
                style={{ backgroundColor: colors[index] }}
                className={"size-3 rounded-sm"}
              />
              <span className='text-secondaryText font-medium leading-[150%]'>{item.id}</span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-1">
          {data.map((item, index) => (
            <li key={index} className="text-secondaryText font-medium leading-[150%]">
              {item.value}%
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default PieChartCustom;
