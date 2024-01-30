interface RatingbarProps {
  name: string;
  color: string;
  percent: string;
}

export default function Ratingbar({ name, color, percent }: RatingbarProps) {
  return (
    <div className='max-w-[600px] text-left py-1 cursor-pointer'>
      <span className='' style={{ color: color }}>
        {name}
      </span>
      <span className='mx-1' style={{ color: color }}>
        {percent}%
      </span>
      <div className='w-[250px] h-2   rounded bg-[#999999]'>
        <div
          className='h-2  rounded'
          style={{ backgroundColor: color, width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
