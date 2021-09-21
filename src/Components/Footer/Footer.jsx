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
                <footer className={classes.footer} >
                    <p className='text-center'>Footer</p>
                </footer>
            )}
        </Fragment>
        
    );
};

export default Footer;