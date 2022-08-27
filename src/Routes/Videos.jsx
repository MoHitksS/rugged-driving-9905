import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SidebarRightData from '../Components/SidebarRightData'
import VideosData from '../Components/VideosData'

const Videos = () => {
  return (
    <Box w={'100%'} >
      <Box w={"80%"} m={'auto'}>
        <Flex direction={'column'} gap={2}>
          <VideosData query={"FeaturedVideos"} title={"Videos"} headTitle={"Featured Videos"} />
          <VideosData query={"ESPNcricinfoShows"} title={"Videos"} headTitle={"ESPNcricinfo shows"} />
          <Flex>
            <Box w={"75%"}>
              <VideosData query={"Videos"} title={"Videos"} headTitle={"Videos"} />
            </Box>
            <Box w={"24%"} mt={3}>
              <SidebarRightData />
            </Box>
          </Flex>
        </Flex>
      </Box>

    </Box>
  )
}

export default Videos