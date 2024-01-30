interface HandlePreviousProps {
  handlePrevious: ()=> void;
}
interface HandleNextProps {
  handleNext: ()=> void;
}

export function Previous({ handlePrevious }: HandlePreviousProps){
	return(
      <div onClick={handlePrevious} className="absolute flex justify-center items-center left-5 bg-[#000000]   m-auto top-0 bottom-0 h-[40px] w-[40px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path 
              d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" 
              style={{fill:"#ffffff"}}
            />
          </svg>
      </div>
		)
}
export function Next({ handleNext }: HandleNextProps){
	return(
       <div onClick={ handleNext } className="absolute flex justify-center items-center right-5 bg-black text-white  m-auto top-0 bottom-0 h-[40px] w-[40px]">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path 
              d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"
              style={{fill:"#ffffff"}}
            />
         </svg>
      </div>
		)
}

 export const slideVariants = {
    hiddenRight: {
      opacity: 0,
    },
    hiddenLeft: {
      opacity: 0,
    },
    visible: {
     
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      
      transition: {
        duration: 0.5,
      },
    },
  };