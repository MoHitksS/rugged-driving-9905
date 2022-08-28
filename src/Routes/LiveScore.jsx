import React, { useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import SidebarRightData from '../Components/SidebarRightData'
import LiveScoreData from '../Components/LiveScoreData'
import { DarkModeContext } from '../ContextApi/DarkModeContext'
import { useContext } from 'react';
const LiveScore = () => {
  const dataHead = ['Live', 'Upcoming', "Result"]
  const [headData, setHeadData] = useState("Live")
  const { style } = useContext(DarkModeContext)
  return (
    <Box w={'100%'}>
      <Flex w={'80%'} m={'auto'} gap={8}>
        <Box w={"75%"}>
          <Flex alignItems={'center'} justifyContent={'space-around'} p={2} borderRadius='10px' boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'} style={style}>
            {dataHead.map((ele, index) => (
              <Text key={index} cursor={'pointer'} onClick={() => setHeadData(ele)} _hover={{ color: "#03A9F4" }}>{ele}</Text>
            ))}
          </Flex>

          <Box borderRadius='10px' mt={10} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'} style={style}>
            <LiveScoreData query={headData} title={"Top Events"} />
          </Box>

          <Box borderRadius='10px' mt={10} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'} style={style}>
            <LiveScoreData query={"Upcoming?_limit=4"} title={"Intresting Matches"} />
          </Box>


        </Box>
        <Box w={"22%"}>
          <SidebarRightData />
        </Box>
      </Flex>
    </Box>
  )
}

export default LiveScore