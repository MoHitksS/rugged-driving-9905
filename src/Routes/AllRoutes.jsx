import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Features from '../Components/Features'
import Home from '../Components/Home'
import LiveScore from '../Components/LiveScore'
import News from '../Components/News'
import Stats from '../Components/Stats'
import Teams from '../Components/Teams'
import Videos from '../Components/Videos'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/live-score' element={<LiveScore/>}></Route>
            <Route path='/teams' element={<Teams/>}></Route>
            <Route path='/news' element={<News/>}></Route>
            <Route path='/features' element={<Features/>}></Route>
            <Route path='/videos' element={<Videos/>}></Route>
            <Route path='/stats' element={<Stats/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes