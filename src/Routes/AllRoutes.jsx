import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Components/Home'
import LiveScore from '../Components/LiveScore'
import Teams from '../Components/Teams'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/live-score' element={<LiveScore/>}></Route>
            <Route path='/teams' element={<Teams/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes