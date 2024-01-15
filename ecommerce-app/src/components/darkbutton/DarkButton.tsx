import { MouseEventHandler } from 'react';

interface PurpleBlueButtonProp {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const DarkButton = ({ onClick, children }: PurpleBlueButtonProp) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className='hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm py-0.5 px-1.5 text-center me-2  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
    >
      {children}
    </button>
  );
};

export default DarkButton;
