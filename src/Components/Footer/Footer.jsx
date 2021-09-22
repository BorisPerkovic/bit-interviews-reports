import React, { Fragment } from "react";
import { useLocation} from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {

    /* use Location hook for hiding footer in log in component */
    const location = useLocation();
    const path = location.pathname !== "/login";

    return(
        <Fragment>
            {path && (
                <footer className={`d-flex justify-content-center align-items-center ${classes.footer}`} >
                    <p className='text-center'>Copyright &copy; BiT Students 2021 | Final Project</p>
                </footer>
            )}
        </Fragment>
        
    );
};

export default Footer;