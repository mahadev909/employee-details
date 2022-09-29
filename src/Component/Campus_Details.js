<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import './Campus_Details.css';
import axios from 'axios';
import campus_details from './Campus_Details.json';

export function Campus_Details() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Emp Code</th>
            <th>Emp Name</th>
            <th>Emp Email</th>
            <th>Emp Mobile Number</th>
            <th>Grade/Subgrade</th>
            <th>GEMS Batch</th>
            <th>Joining FY as FTE</th>
            <th>Training Batch</th>
            <th>CS / Non CS</th>
            <th>Drona / Non Drona</th>
            <th>PSL Joining Date</th>
            <th>Campus Comments</th>
            <th>Joining PSL?</th>
            <th>FTE Joining Date</th>
            <th>WFO Date</th>
            <th>Exam End Date</th>
            <th>Exam End Date Status</th>
            <th>Employee Gender</th>
            <th>Base Location</th>
            <th>Employee Type</th>
            <th>Employee Facility</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {
            campus_details.map((cd,index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{cd.EmpCode}</td>
                <td>{cd.EmpName}</td>
                <td>{cd.EmpEmail}</td>
                <td>{cd.EmpMobileNumber}</td>
                <td>{cd.GradeSubgrade}</td>
                <td>{cd.GEMSBatch}</td>
                <td>{cd.JoiningFYasFTE}</td>
                <td>{cd.TrainingBatch}</td>
                <td>{cd.CSNonCS}</td>
                <td>{cd.DronaNonDrona}</td>
                <td>{cd.PSLJoiningDate}</td>
                <td>{cd.CampusComments}</td>
                <td>{cd.JoiningPSL}</td>
                <td>{cd.FTEJoiningDate}</td>
                <td>{cd.WFODate}</td>
                <td>{cd.ExamEndDate}</td>
                <td>{cd.ExamEndDateStatus}</td>
                <td>{cd.EmployeeGender}</td>
                <td>{cd.BaseLocation}</td>
                <td>{cd.EmployeeType}</td>
                <td>{cd.EmployeeFacility}</td>
              </tr>
            ))

          }
        </tbody>
      </table>
    </div>
=======
import React from 'react';

export function Campus_Details() {
  return (
    <div>Campus_Details</div>
>>>>>>> 149bb323daf4554f9fcf05704780b69960d5eb6f
  )
}

