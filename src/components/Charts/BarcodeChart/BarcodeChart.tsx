import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  percentage: number; 
  background: string;
  totalWidth: number;
}

const BarcodeChart: React.FC<Props> = ({ percentage, background, totalWidth }) => {
  const columns = Math.floor((percentage / 100) * totalWidth / 2);

  return (
    <div
      className="h-[160px] flex gap-0.5"
      style={{
        width: `${percentage}%`,
      }}
    >
      <div className="relative flex items-end">
        <motion.div
          className="w-0.5 h-[160px]"
          style={{ background }}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, ease: 'easeIn' }}
        />
        <div className="absolute left-4 flex flex-col gap-1.5">
          <span className="text-secondaryText text-sm font-medium leading-[120%]">Ringfence</span>
          <span className="text-baseText font-semibold leading-[125%]">25%</span>
        </div>
      </div>

      {Array.from({ length: columns - 1 }).map((_, idx) => (
        <motion.div
          key={idx}
          className="w-0.5 h-[90px]"
          style={{ background }}
          initial={{ height: 0 }}
          animate={{ height: '90px' }}
          transition={{ duration: 0.6, delay: idx * 0.003 }}
        />
      ))}
    </div>
  );
};

export default BarcodeChart;
