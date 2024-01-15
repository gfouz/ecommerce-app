interface PurpleBlueButtonProp {
  children: React.ReactNode;
}

const GreenBlueButton = ({ children }: PurpleBlueButtonProp) => {
  return (
    <button
      type='button'
      className='font-semibold bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-8 py-1 text-center me-2 mb-2 text-black hover:text-[#000000]'
    >
      {children}
    </button>
  );
};

export default GreenBlueButton;
