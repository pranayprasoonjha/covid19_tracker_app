import React from 'react';

import './Table.css';


export default function Table(props) {
  

    const data = Array.from(props.data);

  
  
    return(
      <div className="container">
        
        <hr/>
        <table id="table1" className="table table-hover  table-responsive"  >
          <thead className="thead-dark">
            <tr>
              
              <th>State</th>
              <th>Confirmed</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>Deaths</th>
              
            </tr>
          </thead>

          <tbody>
            {
              data.map(row=> (
                <tr>
                
                <td>{row.state}</td>
                <td>{row.confirmed}</td>
                <td>{row.active}</td>
                <td>{row.recovered}</td>
                <td>{row.deaths}</td>
                

              </tr>

              ))
              
            }
          </tbody>

        </table>
        
          
      </div>
      
    )
}