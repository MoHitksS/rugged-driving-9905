import React, { useContext, useEffect, useState } from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import styles from '../CSS/SidebarLeft.module.css'
import { Skeleton, Text } from '@chakra-ui/react'
import { DarkModeContext } from '../ContextApi/DarkModeContext'
const SidebarLeftData = ({ data, title }) => {

  const [loading, setLoading] = useState(false)
  const {style, hrStyle} = useContext(DarkModeContext)
  useEffect(() => {
    let id = setInterval(() => {
      setLoading(true)
    }, 1000)

    return () => clearInterval(id)
  }, [])
  return (
    <Skeleton isLoaded={loading}>
      <div className={styles.sidebarData} style={style}>
        <p className={styles.sidebarDataHeading}>{title}</p>
        <Text mb={2} style={hrStyle} />
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