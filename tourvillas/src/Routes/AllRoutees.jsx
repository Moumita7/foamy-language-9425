import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HolidayPage from '../Component/HolidayPage/HolidayPage'
import SingleHolidayPage from '../Component/HolidayPage/SingleHolidayPage'
import ErrorPage from '../Component/HomePage/ErrorPage'
import Home from '../Component/HomePage/Home'

const AllRoutees = () => {
  return (
   <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/holiday' element={<HolidayPage/>}/>
        <Route path='/holiday/:id' element={<SingleHolidayPage/>}/>
        <Route path='*' element={<ErrorPage/>}   />


    </Routes>
   </>
  )
}

export default AllRoutees