import { Box, Flex, Image, Skeleton, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../ContextApi/DarkModeContext'
import { useContext } from 'react';

const DataFetch = ({ query, title }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const { style,hrStyle } = useContext(DarkModeContext)
    useEffect(() => {
        let id = setInterval(() => {
            setLoading(true)
        }, 1000)

        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        axios.get(`https://apna-mock-server.herokuapp.com/espncricinfoData${query}`).then(res => (
            setData(res.data)
        )).catch(error => (
            console.log(error)
        ))
    }, [query]);
    return (
        <Skeleton isLoaded={loading}>
            <Box borderRadius='8px' style={style} overflow='hidden' boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
                <Text align={'left'} p={3} fontWeight={'bold'} fontSize={'x-large'}>{title}</Text>
                <Text style={hrStyle} />
                {data?.map((ele, index) => (
                    <Link to={`/${query}/${ele.heading.replace(/\s+/g, '-')}`} state={{query: `${query}`,title: `${ele.heading}`}} key={index} >
                        <Flex gap={5} p={5} style={hrStyle}>
                            <Box w={'35%'}
                                h={180}
                                borderRadius={8}
                                overflow={"hidden"}>
                                <Image src={ele.img}
                                    w={"100%"}
                                    h={180}
                                    transition={'transform .5s, filter 1.5s ease-in-out'}
                                    _hover={{ transform: "scale(1.1)" }}>
                                </Image>
                            </Box>
                            <Box w={'70%'}
                                h={180}>
                                <Flex direction={'column'} gap={1}>
                                    <Text align={'left'} fontSize={16} fontWeight={'bold'} >{ele.heading}</Text>
                                    <Text align={'left'} color={'#48494A'} style={style} fontWeight="light">{ele.description}</Text>
                                </Flex>
                                <Flex alignItems={'left'} color={'#48494A'} fontWeight="light" fontSize={13} style={style} lineHeight={7} gap={3}>
                                    <Text >{(Math.random() * 60).toFixed()} min ago </Text>
                                    <Text>•</Text>
                                    <Text>{ele.writer}</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Link>
                ))}
            </Box>
        </Skeleton>
    )
}

export default DataFetch
