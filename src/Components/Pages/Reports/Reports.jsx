import React, { useEffect, useState } from "react";
import ReportCard from "./ReportCard/ReportCard";
import { dataService } from "../../../communicators/data.service";

import classes from '../Reports/Reports.module.css';
   
const Reports=()=>{
 
    const [reports,setReports]=useState([]);

    const getReports=async()=>{
        const response= await dataService.getReports();
        setReports(response);
        console.log("from get reports",response)
        
    }


useEffect(getReports,[]);
console.log("from get state",reports)
    return (
     
        <div className='container fluid'>
          <div className='container'>
           {reports.map(item=>{
            
              return <ReportCard key={item.id} item={item} />
           })}
            
          </div>

        </div>



        ) 
  
      


}


 

export default Reports;
