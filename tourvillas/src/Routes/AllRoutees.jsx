import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HolidayPage from '../Component/HolidayPage/HolidayPage'
import SingleHolidayPage from '../Component/HolidayPage/SingleHolidayPage'
import ErrorPage from '../Component/HomePage/ErrorPage'
import Home from '../Component/HomePage/Home'
import Login from '../Component/HomePage/Login'
import Signup from '../Component/HomePage/Signup'


const AllRoutees = () => {
  return (
   <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/holiday' element={<HolidayPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>


        {/* <Route path='/holiday/:id' element={<SingleHolidayPage/>}/> */}
        <Route exact path="/:id/holiday" element={<SingleHolidayPage/>}/>
     
        
        <Route path='*' element={<ErrorPage/>}   />


    </Routes>
   </>
  )
}

export default AllRoutees