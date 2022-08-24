import React from 'react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import styles from '../CSS/SidebarLeft.module.css'
const SidebarLeftData = ({data,title}) => {
  return (
    <div className={styles.sidebarData}>
        <p className={styles.sidebarDataHeading}>{title}</p>
        <hr />
        {data.map((ele,index)=>(
            <div key={index} className={styles.sidebarDataSection}>
                <ChevronRightIcon color={'#11aef5'}/>
                <span>{ele}</span>
            </div>
        ))}
    </div>
  )
}

export default SidebarLeftData