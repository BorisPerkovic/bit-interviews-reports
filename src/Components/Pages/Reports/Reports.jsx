import React, { useEffect, useState, Fragment } from "react";
import ReportCard from "./ReportCard/ReportCard";
import { dataService } from "../../../services/data.service";
import { authService } from "../../../services/auth.service";
import Spinner from "../../Spinner/Spinner";

   
const Reports = () =>{
 
    const [reports, setReports] = useState([]);
    const [logIn, setLogIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [deletedItem, setDeletedItem] = useState(false);

    /* function for checking if user is Logged In, if user is not Logged In redirect user to LogIn page */
    const isLogedIn = () => {
        const token = authService.getToken();
        if (!token) {
            window.location.assign("http://localhost:3000/login");
            return false;
        }
        setLogIn(true);
        return true;
    };

    const getReports = async()=>{
        const response= await dataService.getReports();
        setReports(response);
        setIsLoading(false);
    }

    useEffect(() => {
        isLogedIn();
        getReports();
    },[]);

    return (
        <Fragment>
        {logIn && (
            <div className="container main-mb">
                <div className="py-4 bg-light border-bottom border-dark">
                    <div className="col-md-3 px-2 py-3">
                        <input
                        className=" form-control me-0 rounded"
                        type="search"
                        placeholder="Search"
                        aria-label="Search" />
                    </div>
                </div>
                <main className="container py-5">
                    {isLoading && <Spinner />}
                    {reports.map(item=> <ReportCard key={item.id} item={item} />)}
                </main>
            </div>)}
        </Fragment>
    ); 
};

export default Reports;