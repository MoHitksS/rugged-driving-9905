import { Box, Flex, Heading, Image, Skeleton, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DarkModeContext } from '../ContextApi/DarkModeContext'
import { useContext } from 'react';
const {REACT_APP_API} = process.env

const SingleSearchData = () => {
    const [data, setData] = useState([]);
    const location = useLocation();
    const title = location.state?.title;
    useEffect(() => {
        axios.get(`${REACT_APP_API}/epsnCrickInfo?q=${title}`).then(res => (
            setData(res.data)
        )).catch(error => (
            console.log(error)
        ))
    }, []);
    
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let id = setInterval(() => {
            setLoading(true)
        }, 1000)

        return () => clearInterval(id)
    }, [])

    const { style } = useContext(DarkModeContext)
    return (
        <Skeleton isLoaded={loading}>
            <Box borderRadius='8px' style={style} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
                <Link to={`/`}>
                    <Text align={'left'} p={3} pl={8} fontWeight={500} fontSize={'large'} color={"#03A9F4"}>Home</Text>
                </Link>
                <hr />
                {data?.map((ele, index) => (
                    <Flex alignItems={'flex-start'} pl={8} pr={4} pt={3} pb={50} direction={'column'} gap={3} key={index}>
                        <Heading as={'h1'} align={'left'} size={'lg'}>{title}</Heading>
                        <Text align={'left'} fontSize={20}>{ele.description}</Text>
                        <Box w={'100%'}
                            borderRadius={8}
                            overflow={"hidden"}>
                            {ele.videoUrl ? <iframe width="100%" height="600px" src={ele.videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> : <Image src={ele.img}
                                w={"100%"}
                                transition={'transform .5s, filter 1.5s ease-in-out'}
                                _hover={{ transform: "scale(1.1)" }}>
                            </Image>}
                        </Box>
                        <Box textAlign={'left'} fontSize={17} pt={5} pl='50px' pr='70px'>
                            <Text>{ele.content1}</Text>
                            <Heading as={'h2'} size={'large'} mt={5}>{ele.heading1}</Heading>
                            <Flex direction={'column'} gap={4}>
                                <Text>{ele.content2}</Text>
                                <Text>{ele.content3}</Text>
                                <Text>{ele.content3}</Text>
                                <Text>{ele.content4}</Text>
                                <Text>{ele.content5}</Text>
                            </Flex>
                            <Heading as={'h2'} size={'large'} mt={5}>{ele.heading2}</Heading>
                            <Flex direction={'column'} gap={4}>
                                <Text>{ele.content6}</Text>
                                <Text>{ele.content7}</Text>
                                <Text>{ele.content8}</Text>
                                <Text>{ele.content9}</Text>
                            </Flex>
                            <Heading as={'h2'} size={'large'} mt={5}>{ele.heading3}</Heading>
                            <Flex direction={'column'} gap={4}>
                                <Text>{ele.content10}</Text>
                                <Text>{ele.content11}</Text>
                                <Text>{ele.content12}</Text>
                                <Text>{ele.content13}</Text>
                            </Flex>
                        </Box>
                    </Flex>
                ))}

            </Box>
        </Skeleton>
    )
}

export default SingleSearchData