import { Box, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DarkModeContext } from '../ContextApi/DarkModeContext'
import { useContext } from 'react';
const {REACT_APP_API} = process.env

const StatsData = ({ title, query, w }) => {
    const [data, setData] = useState([]);
    const { style,mode } = useContext(DarkModeContext)
    useEffect(() => {
        axios.get(`${REACT_APP_API}/espncricinfoData${query}`).then(res => (
            setData(res.data)
        )).catch(error => (
            console.log(error)
        ))
    }, [query]);
    const getStyle = (mode) => {
        return mode ? {
            borderBottom:"1px solid white"
        } : {
            borderBottom:"1px solid #2b2c2d"
        }
    }

    const newStyle = getStyle(mode)

    
    return (
        <Box w={w} borderRadius='8px' style={style} pt={2} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
            <Text borderBottom={'1px solid #2b2c2d'}/>
            <Box p={2} pt={1}>
                <Text align={'left'}>{title}</Text>
                <Text style={newStyle} mb={1}/>
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