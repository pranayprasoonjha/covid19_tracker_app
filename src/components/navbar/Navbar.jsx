import React from 'react';
import './Navbar.css';




const Navbar = () => 
{
return (
    <div id="style_navbar">
    <div className="navbar navbar-expand-md  navbar-dark bg-dark sticky-top">
	    <div className="container-fluid">
           
        <a className="navbar-brand" href="http://localhost:3000/"> Track covid-19</a>  
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ResponsiveNavbar">
		    <span className="navbar-toggler-icon"></span>	
		    </button>
		    <div className="collapse navbar-collapse" id="ResponsiveNavbar">
		 	    <ul className="navbar-nav ml-auto" >
		 		    <li className="nav-item active">
		 			    <a className="nav-link" href="http://localhost:3000/">Home</a>
		 		    </li>
		 		    <li className="nav-item">
		 			    <a className="nav-link" href="https://www.mohfw.gov.in/pdf/ProtectivemeasuresEng.pdf">Safety Measures</a>
		 		    </li>
		 		    <li className="nav-item">
		 			    <a className="nav-link" href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019">About CoronaVirus</a>
		 		    </li>
		 		    <li className="nav-item">
		 			    <a className="nav-link" href="https://www.pmcares.gov.in/en/">Donate</a>
		 		    </li>

			    </ul>
		    </div>
	    </div>
    </div>


    </div>
)
    

}

export default Navbar;