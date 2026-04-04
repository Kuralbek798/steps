
import "../styles/index.css";
 


function Step({count, handleSteps,message}) { 
   
  return (
    <>
      <div className="numbers">
        <div className={` '' ${count >= 1 ? 'active' : ''}`}>1</div>
        <div className={` '' ${count >= 2 ? 'active' : ''}`}>2</div>
        <div className={` '' ${count === 3 ? 'active' : ''}`}>3</div>
      </div>
      <p className="message">{message}</p>
      <div className="buttons ">
        <button className="btnStyle" onClick={() => handleSteps('prev')} >Previous</button>
        <button className="btnStyle" onClick={() => handleSteps('next')}>Next</button>
      </div>
    </>
  );
}

export default Step;
