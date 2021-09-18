import React,{useState,useRef} from "react";
import { useHistory } from "react-router";
import { Fragment } from "react/cjs/react.production.min";
import { dataService } from "../../../../../../services/data.service";


const FillReportDetails = ({prevPage,pickFillReportHandler,newReport}) => {
  const optionsPhase=['cv','hr','tech','final'];
  const optionStatus=['passed','declined'];
  const history = useHistory();

  
  const [formValidaiton, setFormValidaiton] = useState({
    date : true,
    phase: true,
    status: true,
    notes: true

});
const [errorMessage, setErrorMessage] = useState("");
const [isLoading, setIsLoading] = useState(false);

const dateInputRef = useRef();
const phaseInputRef = useRef();
const statusInputRef = useRef();
const notesInputRef = useRef();

const onSubmitHandler = (event) => {
    setErrorMessage("");
    const enteredDate = dateInputRef.current.value;
    const enteredPhase = phaseInputRef.current.value;
    const enteredStatus = statusInputRef.current.value;
    const enteredNotes = notesInputRef.current.value;

    const dateValid = new Date(enteredDate).getDate() <= new Date().getDate();
    const phaseValid = enteredPhase !== '0';
    const statusValid = enteredStatus !== '0';
    const notesValid = enteredNotes.trim() !== ''; 


    setFormValidaiton({
      date : dateValid,
      phase: phaseValid,
      status: statusValid,
      notes: notesValid
    });

    const formIsValid = dateValid && phaseValid && statusValid && notesValid;

    if(!formIsValid) {
        return;
    }
   
    pickFillReportHandler(enteredDate,enteredPhase,enteredStatus,enteredNotes);
    createReport();
    history.push('/')

    
};

const createReport=async()=>{
 const report = await dataService.createNewReport(newReport); 
  
  return report;
  
}


  return (
    <Fragment>
    <div className='container select-wrapper'>
      <div className="row">
         <div className="col-md-4">
          <label htmlFor="date-picker">Interview date</label>
          <input type="date" id='date-picker' className='form-control' ref={dateInputRef}/>
          {!formValidaiton.date && <div id="emailHelp" className="form-text text-danger">Date can not be in future!</div>}
         </div>

         <div className="col-md-4">

          <label htmlFor="phase-select">Phase</label>
          <select name="" id="phase-select" className='form-control' ref={phaseInputRef}>
            <option value='0'> Select phase </option>
           {optionsPhase.map((option,index)=> <option value={option} key={index}> {option}</option>)}
            
          </select>
          {!formValidaiton.phase && <div id="emailHelp" className="form-text text-danger">Please select valid phase!</div>}
         </div>
         <div className="col-md-4">
          <label htmlFor="status-select">Status</label>
           <select name="" id="status-select" className='form-control' ref={statusInputRef}>
            <option value='0'> Select status </option>
           {optionStatus.map((option,index)=> <option value={option} key={index}> {option}</option>)}
            
           </select>
           {!formValidaiton.status && <div id="emailHelp" className="form-text text-danger">Please select valid status!</div>}

         </div>

      </div>
      <div className='col-sm-12 mt-4'>
      <label htmlFor="text-area">Notes</label>
      <textarea name="" id="text-area" cols="30" rows="10" className='form-control' ref={notesInputRef}></textarea>
      {!formValidaiton.notes && <div id="emailHelp" className="form-text text-danger">Please insert notes!</div>}
      </div>

    </div>

    <div className="d-flex justify-content-end">
        <button
        
          // onClick={nextPage}
          className="btn btn-success mt-3 me-2"
        >
          Back
        </button>
      </div>

      <div className="d-flex justify-content-end">
        <button
          onClick={onSubmitHandler}
          className="btn btn-success mt-3 me-2"
        >
          Save
        </button>
      </div>

   
  </Fragment>
  );
};

export default FillReportDetails;
