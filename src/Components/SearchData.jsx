import { Box, Flex, Image, SimpleGrid, Skeleton, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { DarkModeContext } from '../ContextApi/DarkModeContext'
import { useContext } from 'react';
const {REACT_APP_API} = process.env

const SearchData = ({ title, dataShowLimit }) => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const query = location.state?.query;
  const { style } = useContext(DarkModeContext)
  let date = new Date().toLocaleString("en-US", { day: '2-digit' });
  let month = new Date().toLocaleString("en-US", { month: "long" });
  let year = new Date().getFullYear();

  useEffect(() => {
    axios.get(`${REACT_APP_API}/epsnCrickInfo?q=${query}`).then(res => (
      setData(res.data)
    )).catch(error => (
      console.log(error)
    ))
  }, [query]);

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let id = setInterval(() => {
      setLoading(true)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return (
    <Skeleton isLoaded={loading}>
      <Box borderRadius='8px'style={style} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
        <Text align={'left'} p={3} fontWeight={'bold'} fontSize={'x-large'}><Flex gap={1}>{data.length} results found : <Text color={"#03A9F4"}>{query}</Text></Flex></Text>
        <hr />
        <SimpleGrid columns={dataShowLimit} gap={2} p={3}>
          {data?.map((ele, index) => (
            <Link to={`/${title}/${ele.heading}`} key={index} state={{ title: `${ele.heading}` }}>
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
    </Skeleton>
  )
}

export default SearchData