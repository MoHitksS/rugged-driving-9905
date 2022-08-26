import React, { useEffect, useState } from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import styles from '../CSS/SidebarLeft.module.css'
import { Skeleton } from '@chakra-ui/react'
const SidebarLeftData = ({ data, title }) => {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let id = setInterval(() => {
      setLoading(true)
    }, 1000)

    return () => clearInterval(id)
  }, [])
  return (
    <Skeleton isLoaded={loading}>
      <div className={styles.sidebarData}>
        <p className={styles.sidebarDataHeading}>{title}</p>
        <hr />
        {data.map((ele, index) => (
          <div key={index} className={styles.sidebarDataSection}>
            <ChevronRightIcon color={'#11aef5'} />
            <span>{ele}</span>
          </div>
        ))}
      </div>
    </Skeleton>
  )
}

export default SidebarLeftData