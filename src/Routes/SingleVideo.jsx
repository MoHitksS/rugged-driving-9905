import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SidebarRightData from '../Components/SidebarRightData'
import SingleVideoData from '../Components/SingleVideoData'

const SingleVideo = () => {
  return (
    <Box>
      <Box w={'100%'}>
        <Flex w={'80%'} m={'auto'} gap={8}>
          <Box w={"22%"}>
            <SidebarRightData />
          </Box>
          <Box w={"75%"}>
            <SingleVideoData />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default SingleVideo