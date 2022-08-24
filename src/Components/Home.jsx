import React from 'react'
import Content from './Content'
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'
import styles from '../CSS/Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
        <SidebarLeft/>
        <Content/>
        <SidebarRight/>
    </div>
  )
}

export default Home