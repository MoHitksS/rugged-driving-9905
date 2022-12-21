import { Box, Flex, Image, SimpleGrid, Skeleton, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DarkModeContext } from '../ContextApi/DarkModeContext'
import { useContext } from 'react';
const {REACT_APP_API} = process.env

const TeamsData = ({ query, title }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const { style,mode,hrStyle} = useContext(DarkModeContext)
    useEffect(() => {
        axios.get(`${REACT_APP_API}/${query}`).then(res => (
            setData(res.data)
        )).catch(error => (
            console.log(error)
        ))

        let id = setInterval(() => {
            setLoading(true)
        }, 1000)

        return () => clearInterval(id)
    }, [query]);
    const getStyle = (mode) => {
        return mode ? {
            borderBottom: '1px solid #2b2c2d',
            borderRight: "1px solid #2b2c2d"
        } : {
            borderBottom: '1px solid #edeef0',
            borderRight: "1px solid #edeef0"
        }
    }
    const newStyle = getStyle(mode)
    return (
        <Skeleton isLoaded={loading}>
            <Box w={"100%"} borderRadius='8px' mb={10} overflow='hidden' style={style} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
                <Text align={'left'} p={2} pl={4} fontWeight={'bold'}>{title}</Text>
                <Text style={hrStyle}></Text>
                <SimpleGrid columns={3}>
                    {data?.map((ele, index) => (
                        <Flex w={'100%'} key={index} alignItems={'center'} gap={5} p={2} pl={8} style={newStyle}>
                            <Image src={ele.flag} alt={ele.country} w={70} h={70}></Image>
                            <Text>{ele.country}</Text>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Box>
        </Skeleton>
    )
}

export default TeamsData