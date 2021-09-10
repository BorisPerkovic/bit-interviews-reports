import React from "react";
import { Link } from "react-router-dom";


const Header = () => {

    return(
        <header className='container d-flex justify-content-between align-items-center p-4'>
            <h1>Interview Reports</h1>
            <Link to="/"><button type='button' className='btn btn-info'>Candidates</button></Link> 
        </header>
    );

};

export default Header;