
import React, { Fragment, useState  } from "react";
import {formateDate} from '../../../../utils/date-function.js';
import ModalReports from "../../../Modal/ModalReports/ModalReports.jsx";
import { dataService } from "../../../../services/data.service.js"; 

import classes from "./ReportCard.module.css";
   
const ReportCard = ({item,setDeletedItem,deletedItem}) => {

    const [displayReportModal, setDisplayReportModal] = useState(false);
    const [detailsReportModal, setDetailsReportModal] = useState({});
    
    
    const reportModalHandler = (report) => {
        setDetailsReportModal(report);
        setDisplayReportModal(true);
    };
    
    const reportModalClose = (param) => {
    setDisplayReportModal(param);
    };

    const deleteOneReport = (item) => {  
        dataService.deleteReport(item.id);
         setDeletedItem(!deletedItem);
    };


    return (
        <Fragment>
            {displayReportModal && (
                <ModalReports report={detailsReportModal} onClose={reportModalClose}  />
            )}
            <div className='row my-4 py-2 rounded shadow'>
                <div className='col-sm-3 py-2 px-3 border-end border-dark'>
                    <h5>{item.companyName}</h5>
                    <span>Company</span>
                </div>
                <div className='col-sm-3 py-2 px-3 border-end border-dark'>
                    <h5>{item.candidateName}</h5>
                    <span>Candidate</span>
                </div>
                <div className='col-sm-2 py-2 px-3 border-end border-dark'>
                    <h5>{formateDate(item.interviewDate)}</h5>
                    <span>Interview Date</span>
                </div>
                <div className='col-sm-2 py-2 px-3 border-end border-dark'>
                    <h5>{item.status}</h5>
                    <span>Status</span>
                </div>
                <div className={`col-sm-2 p-2 d-flex justify-content-center align-items-center ${classes.reportsIcons}`}>
                    <span className = "me-5" onClick={() => { reportModalHandler(item)}}> <i className="far fa-eye"></i> </span>
                    <span> <i className = "fas fa-times" onClick = { () => deleteOneReport(item) }></i> </span>
                </div>
            </div>
        </Fragment>
    ); 
};

export default ReportCard;