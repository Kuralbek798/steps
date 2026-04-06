import { useState } from "react";
import "../styles/index.css";

function Step({ count, isOpen, handleBtnClick, message }) { 
   
  return (
    <div className="steps">
      <button name ="close" className="close" onClick={handleBtnClick}>
        &times;
      </button>
      {isOpen && (
        <>
          <div className="numbers">
            <div className={` '' ${count >= 1 ? "active" : ""}`}>1</div>
            <div className={` '' ${count >= 2 ? "active" : ""}`}>2</div>
            <div className={` '' ${count === 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">{message}</p>
         
          <div className="buttons ">
            <button name="prev" className="btnStyle" onClick={handleBtnClick}>
              Previous
            </button>
            <button name="next" className="btnStyle" onClick={handleBtnClick}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
    
  );
}

export default Step;
