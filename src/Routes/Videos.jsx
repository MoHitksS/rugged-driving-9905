import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SidebarRightData from '../Components/SidebarRightData'
import VideosData from '../Components/VideosData'

const Videos = () => {
  return (
    <Box w={'100%'}>
        <Flex w={'80%'} m={'auto'} gap={8}>
          <Box w={"75%"}>
            <VideosData query={"Features"} title={"Videos"}/>
          </Box>
          <Box w={"22%"}>
            <SidebarRightData/>
          </Box>
        </Flex>
    </Box>
  )
}

export default Videos