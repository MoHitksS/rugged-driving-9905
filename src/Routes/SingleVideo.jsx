import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SidebarRightData from '../Components/SidebarRightData'
import SingleVideoData from '../Components/SingleVideoData'
import VideosData from '../Components/VideosData'

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
            <VideosData query={"FeaturedVideos"}  title={"Videos"} headTitle={"Realated Videos"} dataShowLimit={[1,1,3]} limit={"3"}/>
            <VideosData query={"ESPNcricinfoShows"} title={"Videos"} headTitle={"ESPNcricinfo shows"} dataShowLimit={[2,2,6]} limit={"6"}/>
            <VideosData query={"Videos"} title={"Videos"} headTitle={"Related To Your Videos"} dataShowLimit={[1,1,3]} />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default SingleVideo