import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import DataFetch from '../Components/DataFetch'
import SidebarRightData from '../Components/SidebarRightData'

const Features = () => {
  return (
    <Box w={'100%'}>
        <Flex w={'80%'} m={'auto'} gap={8}>
          <Box w={"75%"}>
            <DataFetch query={"Features"} title={"Features"}/>
          </Box>
          <Box w={"22%"}>
            <SidebarRightData/>
          </Box>
        </Flex>
    </Box>
  )
}

export default Features