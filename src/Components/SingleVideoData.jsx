import { Box, Flex, Heading, Image, Skeleton, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const VideosData = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const query = location.state?.query;
  const title = location.state?.title;
  const api = query === `Article` ? `https://apna-mock-server.herokuapp.com/epsnCrickinfoSidebars?q=${title}` : query === 'Home' ? `https://apna-mock-server.herokuapp.com/espncricinfoHomeData?q=${title}` : `https://apna-mock-server.herokuapp.com/espncricinfoData${query}?q=${title}`
  useEffect(() => {
    axios.get(api).then(res => (
      setData(res.data)
    )).catch(error => (
      console.log(error)
    ))
  }, [api]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let id = setInterval(() => {
      setLoading(true)
    }, 1000)

    return () => clearInterval(id)
  }, [])
  return (
    <Skeleton isLoaded={loading}>
      <Box borderRadius='8px' boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
        <Link to={query === "Home" ? `/` : `/${query}`}>
          <Text align={'left'} p={3} pl={8} fontWeight={500} fontSize={'large'} color={"#03A9F4"}>{query}</Text>
        </Link>
        <hr />
        {data?.map((ele, index) => (
          <Flex alignItems={'flex-start'} pl={8} pr={4} pt={3} pb={135} direction={'column'} gap={3} key={index}>
            <Heading as={'h1'} align={'left'} size={'lg'}>{title}</Heading>
            <Text align={'left'} fontSize={20}>{ele.description}</Text>
            <Box w={'100%'}
              borderRadius={8}
              overflow={"hidden"}>
              <Image src={ele.img}
                w={"100%"}
                transition={'transform .5s, filter 1.5s ease-in-out'}
                _hover={{ transform: "scale(1.1)" }}>
              </Image>
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

export default VideosData