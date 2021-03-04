import React from 'react';
import './Cards.css';



const Cards = ({data: {confirmed, recovered, deaths, lastUpdate} }) => {
   
    if(!confirmed) {
        return 'loading..'
    }
    return (
       <div className = "container">
           <div className="row">
                    <div className="card c1 col-sm-4 col-6 col-md-3 col-lg-3" >
                        
                        <div className="card-body ">
                            <p className="card-title">{confirmed.value}</p>
                            <p className="card-text d">TOTAL INFECTED</p>
                            <p className="card-text date">{new Date(lastUpdate).toDateString()}</p>
                        
                        </div>
                        
                    </div>
                    <div className="card c2 col-sm-4  col-6 col-md-3 col-lg-3" >
                        
                        <div className="card-body ">
                            <p className="card-title">{recovered.value}</p>
                            <p className="card-text d">TOTAL RECOVERED</p>
                            <p className="card-text date">{new Date(lastUpdate).toDateString()}</p>
                        
                        </div>
                    </div> 
                    <div className="card c3 col-sm-4 col-6 col-md-3 col-lg-3" >
                        
                        <div className="card-body ">
                            <p className="card-title">{deaths.value}</p>
                            <p className="card-text d">TOTAL DEATHS</p>
                            <p className="card-text date">{new Date(lastUpdate).toDateString()} </p>
                        
                        </div>
                    </div>  
            </div>
        </div>
            
            
            
        
    )
}

export default Cards; 