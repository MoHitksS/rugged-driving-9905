import React from 'react'
import styles from '../CSS/Content.module.css'
import ContentData from '../Components/ContentData'

const Content = () => {
  return (
    <div className={styles.content}>
      <ContentData/>
    </div>
  )
}

export default Content