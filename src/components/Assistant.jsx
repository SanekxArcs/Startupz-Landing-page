import { useState } from "react";
import assistant from "./../assets/assistant.png";
import closeico from "./../assets/close.svg";


const Assistant = () => {
  const [showPopUP, setShowPopUP] = useState(false);

  const clickHandler = () => {
     return setShowPopUP(!showPopUP);
  }

  return (
    <>
      <div className="fixed z-50 bottom-8 right-8" title="Assistant button">
        <button
          onClick={clickHandler}
          className="relative w-16 h-16 transition-all bg-white border-0 rounded-full shadow-xl md:w-32 md:h-32 hover:bg-coral"
        >
          <div className="flex items-center justify-center">
            {showPopUP || 
              <img
                className="w-14 h-146 md:w-28 md:h-28"
                src={assistant}
                alt="assistant"
              />
            }
            {showPopUP && <img className="rounded-full w-14 h-146 md:w-28 md:h-28" src={closeico} alt="close" />} 
          </div>
          {showPopUP && <PopUp />}
        </button>
      </div>
    </>
  );
}

export default Assistant


const PopUp = () => {
  return (
    <div className="absolute p-4 font-medium rounded-full -top-16 md:-top-10 -left-52 bg-darkcyan text-whitesmoke">
      <p>
        Hi! I am Ben, your virtual assistant. <br /> How can I make your day better?
      </p>
      
    </div>
  );
}
