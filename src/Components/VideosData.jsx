import { Box, Center, Container, Flex, Image, SimpleGrid, Skeleton, Spacer, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const VideosData = ({ query, title, headTitle }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
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

    let date = new Date().toLocaleString("en-US", { day: '2-digit' });
    let month = new Date().toLocaleString("en-US", { month: "long" });
    let year = new Date().getFullYear();
    const featuredVideos = (
        <Box>
            <Flex alignItems={'center'}>
                <Text align={'left'} p={3} fontWeight={'bold'} fontSize={'x-large'} >{headTitle}</Text>
                <Spacer />
                <Link to={`/${query}`}>
                    <Text p={3} color={"#03A9F4"}>view all videos</Text>
                </Link>
            </Flex>
            <SimpleGrid columns={4} gap={2} p={3}>
                {data?.map((ele, index) => (
                    <Link key={index} to={`/${title}/${ele.heading}`} state={{query: `${query}`,title: `${ele.heading}`}}>
                        <Box >
                            <Flex direction={'column'} gap={1}>
                                <Box w={'100%'}
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
                                <Text align={'left'} fontWeight={'bold'} fontSize={14}>{ele.heading}</Text>
                                <Text align={'left'} fontSize={12}>{`${month} ${date},${year}`}</Text>
                            </Flex>
                        </Box>
                    </Link>
                ))}
            </SimpleGrid>
        </Box>
    )

    const shows = (
        <Box >
            <Flex alignItems={'center'}>
                <Text align={'left'} p={3} fontWeight={'bold'} fontSize={'x-large'} >{headTitle}</Text>
            </Flex>
            <SimpleGrid columns={8} gap={2} p={3}>
                {data?.map((ele, index) => (
                    <Box key={index} borderRadius={8} w={'140px'} h={'180px'} backgroundImage={`${ele.backgroundImg}`}>
                        <Flex alignItems={'center'} justifyContent={'center'} pt={'50px'}>
                            <Image src={ele.img} w={'90px'}></Image>
                        </Flex>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    )

    const videos = (
        <Box>
            <SimpleGrid columns={3} gap={4} p={3}>
                {data?.map((ele, index) => (
                    <Link key={index} to={`/${title}/${ele.heading}`} state={{query: `${query}`,title: `${ele.heading}`}}>
                        <Box h={"350px"} p={3} background={'white'} borderRadius={8} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
                            <Flex direction={'column'} gap={1}>
                                <Box w={'100%'}
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
                                <Box pr={4}>
                                    <Text align={'left'} fontWeight={'bold'} fontSize={14}>{ele.heading}</Text>
                                    <Text align={'left'} fontSize={12}>{`${month} ${date},${year}`}</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Link>
                ))}
            </SimpleGrid>
        </Box>
    )

    // const videosData = (
    //     <Skeleton isLoaded={loading}>
    //         <Box borderRadius='8px' boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
    //             <Text align={'left'} p={3} fontWeight={'bold'} fontSize={'x-large'}>{title}</Text>
    //             <hr />
    //             {data?.map((ele, index) => (
    //                 <Link to={`/${query}/${ele.heading}`} state={{ query: `${query}`, title: `${ele.heading}` }} key={index} >
    //                     <Flex gap={5} p={5} borderBottom={"1px solid #e3e3e3"}>
    //                         <Box w={'35%'}
    //                             h={180}
    //                             borderRadius={8}
    //                             overflow={"hidden"}>
    //                             <Image src={ele.img}
    //                                 w={"100%"}
    //                                 h={180}
    //                                 transition={'transform .5s, filter 1.5s ease-in-out'}
    //                                 _hover={{ transform: "scale(1.1)" }}>
    //                             </Image>
    //                         </Box>
    //                         <Box w={'70%'}
    //                             h={180}>
    //                             <Flex direction={'column'} gap={1}>
    //                                 <Text align={'left'} fontSize={16} fontWeight={'bold'} >{ele.heading}</Text>
    //                                 <Text align={'left'} color={'#48494A'} fontWeight="light">{ele.description}</Text>
    //                             </Flex>
    //                             <Flex alignItems={'left'} color={'#48494A'} fontWeight="light" fontSize={13} lineHeight={7} gap={3}>
    //                                 <Text >{(Math.random() * 60).toFixed()} min ago </Text>
    //                                 <Text>•</Text>
    //                                 <Text>{ele.writer}</Text>
    //                             </Flex>
    //                         </Box>
    //                     </Flex>
    //                 </Link>
    //             ))}
    //         </Box>
    //     </Skeleton>
    // )
    return (
        <>
            {query === "FeaturedVideos" ? featuredVideos : ""}
            {query === "ESPNcricinfoShows" ? shows : ""}
            {query === "Videos" ? videos : ""}
        </>
    )
}

export default VideosData
