
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
        <button name="prev" className="btnStyle" onClick={handleSteps} >Previous</button>
        <button name="next" className="btnStyle" onClick={handleSteps}>Next</button>
      </div>
    </>
  );
}

export default Step;
