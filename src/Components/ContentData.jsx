import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Flex, Heading, Image, Skeleton, Text } from '@chakra-ui/react';
import styles from '../CSS/Content.module.css'
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../ContextApi/DarkModeContext'

const ContentData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const { style,hrStyle } = useContext(DarkModeContext)
    useEffect(() => {
        axios.get(`https://apna-mock-server.herokuapp.com/espncricinfoHomeData`).then((res) => {
            setData(res.data)
        }).catch((error) => {
            console.log(error)
        })
        let id = setInterval(() => {
            setLoading(true)
        }, 1000)

        return () => clearInterval(id)
    }, [])

    
    return (
        <Skeleton isLoaded={loading}>
            <Flex direction={'column'} gap={5} width={'100%'} >
                {data?.map((ele, index) => (
                    <Link to={`/${ele.heading.replace(/\s+/g, '-')}`} state={{ query: `Home`, title: `${ele.heading}` }} key={index}>
                        <Box w={"100%"} borderRadius="8px" overflow={'hidden'} style={style} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" gap={10} >
                            {ele.title ? <><Text align="left" p={2} pl={5} fontWeight={"bold"} fontSize={13}>{ele.title}</Text><Text style={hrStyle} mb={3}/>
                                <Box w={"300px"} overflow="hidden" mb={2}>
                                    <Image src={ele.img} w={"100%"} className={styles.imageBoxContent} />
                                </Box>
                            </> : <Box w={"100%"} overflow="hidden" ><Image borderRadius={'8'} overflow={'hidden'} src={ele.img} marginBottom={2} className={styles.imageBoxContent} /></Box>}
                            <Heading align={"left"} pl={5} pr={5} pb={2} as={'h1'} fontSize={'22'} lineHeight={'6'}>{ele.heading}</Heading>
                            <Text align={"left"} pl={5} pr={5} lineHeight={'6'} pb={3}>{ele.description}</Text>
                        </Box>
                    </Link>
                ))}
            </Flex>
        </Skeleton>
    )
}

export default ContentData