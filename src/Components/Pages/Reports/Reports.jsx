import React, { useEffect, useState } from "react";
import ReportCard from "./ReportCard/ReportCard";
import { dataService } from "../../../services/data.service";

   
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