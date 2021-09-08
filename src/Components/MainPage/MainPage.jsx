import React,{useEffect, useState} from "react";
import CandidateCard from "./CandidateCard/CandidateCard";
import Spinner from '../Spinner/Spinner';
import { Fragment } from "react";



const MainPage=()=>{
 const [isLoading,setIsLoading]=useState(false);
 const [logIn,setLogIn]=useState(false);
 const isLogedIn=()=>{
  const token=localStorage.getItem('token');
  if(!token){
    setIsLoading(true);
    window.location.assign("http://localhost:3000/login");
    return false;
  }
  setLogIn(true);
  setIsLoading(false);
  return true;
 }

 useEffect(isLogedIn,[]);
 
return(


<Fragment>
  {logIn && 
<div className="container"> 
{isLoading && <Spinner/>} 
 <nav className="navbar navbar-light bg-light border-bottom border-dark">
  <div className="container  py-4">
      <div className="row w-100">
      <div className="col-md-9"> <a className="navbar-brand">Navbar</a></div>
      <div className="col-md-3"><input className="form-control me-2 rounded" type="search" placeholder="Search" aria-label="Search"/></div>
      </div>

  </div>
 </nav>
   <main className='container py-4 '>

     <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
       <CandidateCard />
       <CandidateCard />
       <CandidateCard />
       <CandidateCard />
     </div>
    
   </main>
</div>}

</Fragment>
)



}

export default MainPage ;