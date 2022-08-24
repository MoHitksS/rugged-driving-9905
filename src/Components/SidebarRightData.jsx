import { Box, Container, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../CSS/SidebarRight.module.css'
const SidebarRightData = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(`https://apna-mock-server.herokuapp.com/epsnCrickinfoSidebars`).then((res)=>{
            setData(res.data)
        }).catch(error=>{
            console.log(error)
        })
    })
  return (
    <div className={styles.sidebarRightData}>
        {data?.map((ele,index)=>(
            <Container key={index} pt={3}>
                <Box w={"100%"} overflow="hidden">
                    <Image src={ele.img} borderRadius={10} w={"100%"} />
                </Box>
                <Text pb={3} align="left" mt={2} fontWeight='600' fontSize={'sm'}>{ele.title}</Text>
                <hr style={{width:"100%"}} />
            </Container>
        ))}
    </div>
  )
}

export default SidebarRightData