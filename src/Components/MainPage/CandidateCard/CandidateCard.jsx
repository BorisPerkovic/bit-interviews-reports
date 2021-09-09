import React from "react";

import classes from './CandidateCard.module.css';

const CandidateCard=()=>{

return(

  <div className="col">
    <div className="card shadow">
    <div className={classes.imgHolder}>
     <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" className="card-img-top  " alt="..."/>
     </div>
      <div className="card-body">
        <h5 className="card-title text-center">Name Lastname</h5>
         
        <p className="card-text text-center">blabla@gmai.com</p>
      </div>
    </div>





</div>
     


)

}
export default CandidateCard ;