import { Box, Flex, Image, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import axios from 'axios';
import { DarkModeContext } from '../ContextApi/DarkModeContext'
import { useContext } from 'react';
import React, { useEffect, useState } from 'react'
const {REACT_APP_API} = process.env

const LiveScoreData = ({ query, title }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let id = setInterval(() => {
            setLoading(true)
        }, 1000)

        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        axios.get(`${REACT_APP_API}/espncricinfoData${query}`).then(res => (
            setData(res.data)
        )).catch(error => (
            console.log(error)
        ))
    }, [query]);

    const { style, mode } = useContext(DarkModeContext)
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

    let date = new Date().toLocaleString("en-US", { day: '2-digit' });
    let month = new Date().toLocaleString("en-US", { month: "long" });
    let year = new Date().getFullYear();

    const Live = (
        <Box>
            <Text align={'left'} p={2} pl={4} fontWeight={'bold'}>{title}</Text>
            <Text style={newStyle}></Text>
            <SimpleGrid columns={2}>
                {data?.map((ele, index) => (
                    <Box w={"100%"} style={newStyle} p={2} key={index} pl={5} fontSize={13}>
                        <Text style={style} textTransform={'uppercase'} fontSize={12} fontWeight={'bold'} align={'left'} color={ele.day === 'Live' ? 'red' : '#454647'}>{ele.day}</Text>
                        <Text fontSize={'12'} align={'left'}>{ele.city} • {`${month} ${date},${year}`} • {ele.tournamnetType}</Text>
                        <Flex gap={2} direction={'column'} mt={2}>
                            <Flex alignItems={'center'} gap={2}>
                                <Image src={ele.flag1} alt={ele.team1} w={5} h={5}></Image>
                                <Text fontWeight={'bold'}>{ele.team1}</Text>
                            </Flex>
                            <Flex alignItems={'center'} gap={2}>
                                <Image src={ele.flag2} alt={ele.team2} w={5} h={5}></Image>
                                <Text fontWeight={'bold'}>{ele.team2}</Text>
                            </Flex>
                            <Text align={'left'} mt={2}>{ele.day === "Live" ? "Match is running" : ele.day !== "Live" && ele.matchTime === "" ? "Match Yet To Begin" : `Match Will Start in ${ele.matchTime}`}</Text>
                            <Text style={newStyle}></Text>
                            <Text align={'left'} fontWeight={'bold'}>Series home</Text>
                        </Flex>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    )

    const Upcoming = (
        <>
            <Box>
                {data?.map((ele, index) => (
                    <Flex key={index} alignItems={'center'} justifyContent={'space-around'}  gap={5} w={'100%'} p={5} pt={5} pb={5} style={newStyle} fontSize={13}>
                        <Flex direction={'column'} alignItems={'flex-start'} w={'20%'} >
                            <Text style={style} fontWeight={'bold'}>{ele.time}</Text>
                            <Text style={style} fontSize={12} color={'#454647'} fontWeight={500}>{ele.time} • {`${month} ${date},${year}`} </Text>
                        </Flex>
                        <Flex direction={'column'} alignItems='flex-start' w={'50%'}>
                            <Text fontWeight={'bold'}>{ele.team1} vs {ele.team2}</Text>
                            <Text style={style} fontSize={12} color={'#454647'} fontWeight={500}>{`${(Math.random() * 15).toFixed()}Match`}• {ele.city} • {`${month} ${date},${year}`}</Text>
                        </Flex >
                        <Flex alignItems={'center'} w={'20%'} >
                            <Text style={style} fontWeight={'bold'} color={'#454647'}>{ele.tournamnetType}</Text>
                        </Flex>
                    </Flex>
                ))}
            </Box>
        </>
    )

    const result = (
        <Box>
            <Text align={'left'} p={2} pl={4} fontWeight={'bold'}>{query}</Text>
            <Text borderBottom={'1px solid #edeef0'}></Text>
            <SimpleGrid columns={2}>
                {data?.map((ele, index) => (
                    <Box w={"100%"} style={newStyle} p={2} key={index} pl={5} fontSize={13}>
                        <Text style={style} textTransform={'uppercase'} fontSize={12} fontWeight={'bold'} align={'left'} color={'#454647'}>Result</Text>
                        <Text fontSize={'12'} align={'left'}>{ele.city} • {`${month} ${date},${year}`} • {ele.tournamnetType}</Text>
                        <Flex gap={2} direction={'column'} mt={2}>
                            <Flex alignItems={'center'} gap={2}>
                                <Image src={ele.flag1} alt={ele.team1} w={5} h={5}></Image>
                                <Text fontWeight={'bold'}>{ele.team1}</Text>
                            </Flex>
                            <Flex alignItems={'center'} gap={2}>
                                <Image src={ele.flag2} alt={ele.team2} w={5} h={5}></Image>
                                <Text fontWeight={'bold'}>{ele.team2}</Text>
                            </Flex>
                            <Text align={'left'} mt={2}>{ele.matchResult}</Text>
                            <Text borderBottom={'1px solid #edeef0'}></Text>
                            <Flex gap={5}>
                                <Text align={'left'} fontWeight={'bold'}>Summary</Text>
                                <Text align={'left'} fontWeight={'bold'}>Series home</Text>
                            </Flex>
                        </Flex>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    )

    return (
        <Skeleton isLoaded={loading}>
            {query === "Live" ? Live : query === "Upcoming?_limit=4" ? Live : query === "Upcoming" ? Upcoming : query === "Result" ? result : Live}
        </Skeleton>
    )
}

export default LiveScoreData