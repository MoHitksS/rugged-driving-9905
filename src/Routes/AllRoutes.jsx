import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Features from './Features'
import Home from './Home'
import LiveScore from './LiveScore'
import News from './News'
import SingleContent from './SingleContent'
import SingleVideo from './SingleVideo'
import Stats from './Stats'
import Teams from './Teams'
import Videos from './Videos'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Live-score' element={<LiveScore/>}></Route>
            <Route path='/Teams' element={<Teams/>}></Route>
            <Route path='/News' element={<News/>}></Route>
            <Route path='/Features' element={<Features/>}></Route>
            <Route path='/Videos' element={<Videos/>}></Route>
            <Route path='/Stats' element={<Stats/>}></Route>
            <Route path='/:title' element={<SingleContent/>}></Route>
            <Route path='/News/:title' element={<SingleContent/>}></Route>
            <Route path='/Features/:title' element={<SingleContent/>}></Route>
            <Route path='/Article/:title' element={<SingleContent/>}></Route>
            <Route path='/Videos/:title' element={<SingleVideo/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes