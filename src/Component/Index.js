import React from 'react';
import './Index.css';
import {Link,Route,Routes} from 'react-router-dom';
import {Emp_Details} from './Emp_Details';
import {Campus_Details} from './Campus_Details';
import {Rm_Details} from './Rm_Details';
import {Ld_Details} from './Ld_Details';
import {Hr_Analytics} from './Hr_Analytics';

export function Index() {
  return (
    <div>
      <h2 align="center">Employee details</h2>
      <div className='tab'>
        <Link className='buttons' to='/emp_details'>Employee Details</Link>
        <Link className='buttons' to='/campus_details'>Campus Details</Link>
        <Link className='buttons' to='/rm_details'>RM Details</Link>
        <Link className='buttons' to='/ld_details'>L and D Details</Link>
        <Link className='buttons' to='/hr_analytics'>HR Analytics</Link>
      </div>
      <Routes>
        <Route path='/emp_details' element={<Emp_Details/>}/>
        <Route path='/campus_details' element={<Campus_Details/>}/>
        <Route path='/rm_details' element={<Rm_Details/>}/>
        <Route path='/ld_details' element={<Ld_Details/>}/>
        <Route path='/hr_analytics' element={<Hr_Analytics/>}/>
      </Routes>
    </div>
  )
}

