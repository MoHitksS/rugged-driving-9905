import { Box, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const StatsData = ({ title, query, w }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`https://apna-mock-server.herokuapp.com/espncricinfoData${query}`).then(res => (
            setData(res.data)
        )).catch(error => (
            console.log(error)
        ))
    }, [query]);
    
    return (
        <Box w={w} borderRadius='8px' pt={2} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
            <hr />
            <Box p={2} pt={1}>
                <Text align={'left'} borderBottom={'1px solid black'}>{title}</Text>
                <hr />
                {data?.map((ele) => (
                    <>
                        <Text align={'left'}pb={1}>{ele.title}</Text>
                        <Text borderBottom={'1px dotted black'}></Text>
                    </>
                ))}
            </Box>
        </Box>
    )
}

export default StatsData