
interface Props { 
  checked: boolean;
  toggleChecked: () => void;
  label?: string;
}

const Checkbox: React.FC<Props> = ({checked, toggleChecked, label}) => {
  return (
    <label onClick={toggleChecked} className="flex gap-3 items-center text-baseText text-sm leading-[140%] font-medium">
      <div 
        className={`relative flex items-center justify-center cursor-pointer w-6 h-6 rounded-md transition-colors ${checked ? 'bg-basePrimary' : 'bg-baseText'}`} 
      >
        {checked && (
          <svg 
            className="w-4 h-4 text-baseText absolute" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </div>
      {label}
    </label>
  );
};

export default Checkbox;
