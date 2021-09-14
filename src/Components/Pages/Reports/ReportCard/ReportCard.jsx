import React, { useState } from "react";
import {formateDate} from '../../../../utils/date-function.js'


   
const ReportCard=({item})=>{


    return (

        
        <div className='row my-4 p-3'>
            <div className='col-sm-3 border-right border-dark'>{item.companyName}</div>
            <div className='col-sm-3 border-right border-dark'>{item.candidateName}</div>
            <div className='col-sm-2 border-right border-dark'>{formateDate(item.interviewDate)}</div>
            <div className='col-sm-2 border-right border-dark'>{item.status}</div>
            <div className='col-sm-2  '></div>

        </div>
        

        ) 
  
      


}


 

export default ReportCard;
