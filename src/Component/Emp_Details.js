import React from 'react';
import './Emp_Details.css';

export function Emp_Details() {
  return (
    <div>
      <table style={{width: "100%"}}>
      <thead>
        <tr>
          <th>SL No.</th>
          <th>Emp. Code</th>
          <th style={{width: "25%"}}>Emp. Name</th>
          <th style={{width: "25%"}}>Emp. Email</th>
          <th>Mobile Number</th>
          <th>Employee Gender</th>
        </tr>
      </thead>
      <tbody style={{textAlign: "center"}}>
        <tr>
          <td>1</td>
          <td>4599000</td>
          <td>ABC</td>
          <td>ABC@xyz.com</td>
          <td>99900033312</td>
          <td>MALE</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

