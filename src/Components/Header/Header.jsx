import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";


const Header = () => {

    const location = useLocation();
    const path = location.pathname !== "/login";

    return(
        <Fragment>
            {path && (<header className='container d-flex justify-content-between align-items-center p-4'>
                <h1>Interview Reports</h1>
                <Link to="/"><button type='button' className='btn btn-info'>Candidates</button></Link> 
            </header>)}
        </Fragment>   
    );

};

export default Header;