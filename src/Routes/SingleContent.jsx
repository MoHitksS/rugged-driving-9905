import React from 'react'
import { Box, Flex } from '@chakra-ui/react';
import SidebarRightData from '../Components/SidebarRightData';
import SingleContentData from '../Components/SingleContentData';
const SingleContent = () => {
  return (
    <Box w={'100%'}>
        <Flex w={'80%'} m={'auto'} gap={8}>
          <Box w={"25%"}>
          <SidebarRightData/>
          </Box>
          <Box w={"75%"}>
            <SingleContentData/>
          </Box>
        </Flex>
    </Box>
  )
}

export default SingleContent