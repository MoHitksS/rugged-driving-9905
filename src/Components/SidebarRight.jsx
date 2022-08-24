import React from 'react'
import styles from '../CSS/SidebarRight.module.css'
import SidebarRightData from './SidebarRightData'

const SidebarRight = () => {
  return (
    <div className={styles.sidebarRight}>
      <SidebarRightData/>
    </div>
  )
}

export default SidebarRight