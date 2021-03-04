import React from 'react';


import './Footer.css';


const foot = () => 
{
return (
<div>
  <footer>
    <div className="container-fluid padding">
      <div className="row text-center">
        <div className="col-md-4">
          <hr class="light"></hr>
          <p className="logo">TRACK COVID-19</p>
          <hr class="light"></hr>
          <p>+91 8789471257</p>
          <p>FINAL YEAR PROJECT</p>
          <p>ASANSOL ENGINEERING COLLEGE</p>
          <p>Asansol, West Bengal, 713305</p>

        </div>

        <div className="col-md-4">
         
          <hr class="light"></hr>
          <p>Group Members</p>
          <hr className="light"></hr>
          <p>Priyanka Pandey(68),  Nidhi Kashyap (76)</p>
          
          <p>Pranay Prasoon Jha(70), Pawan Kumar(72)</p>
         
          <p>Kisholoy Roy(84),  Pawan Kumar Yadav(71)</p>
          
        </div>

        <div className="col-md-4">
         
          <hr className="light"></hr>
          <p>Mentors/Guides</p>
          <hr className="light"></hr>
          <p>Mr. Amit Kumar Rai</p>
          <p>Assistant Professor</p>
          <p>Electronics and Communication Department</p>
          <p>Asansol Engineering College</p>
          
          
          
        </div>
        <div className="col-12">
          <hr className="light"/>
            <h5>&copy; https://trackcovid19project.herokuapp.com/</h5>
          
        </div>
      </div>
    </div>

  </footer>
</div>

)
  
    
    

}

export default foot;