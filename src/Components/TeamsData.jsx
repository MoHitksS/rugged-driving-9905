import { Box, Flex, Image, SimpleGrid, Skeleton, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TeamsData = ({query,title}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        axios.get(`https://apna-mock-server.herokuapp.com/${query}`).then(res => (
            setData(res.data)
        )).catch(error => (
            console.log(error)
        ))

       let id =  setInterval(()=>{
            setLoading(true)
        },2000)

        return () => clearInterval(id)
    }, [query]);
  return (
    <Skeleton isLoaded={loading}>
    <Box w={"100%"} borderRadius='8px' mb={10} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
        <Text align={'left'} p={2} pl={4} fontWeight={'bold'}>{title}</Text>
        <hr />
        <SimpleGrid columns={3}>
            {data?.map((ele,index)=>(
                <Flex w={'100%'} key={index} alignItems={'center'} gap={5} p={2} pl={8} borderRight={'1px solid #e3e3e3'} borderBottom={'1px solid #e3e3e3'}>
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