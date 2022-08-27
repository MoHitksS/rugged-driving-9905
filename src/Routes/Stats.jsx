import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SidebarRightData from '../Components/SidebarRightData'
import StatsData from '../Components/StatsData'

const Stats = () => {
  return (
    <Box w={'100%'} >
      <Box w={"80%"} m={'auto'}>
        <Flex direction={'column'} gap={2}>
          <Flex>
            <Box w={"75%"}>
              <Flex gap={10}>
                <Box w={"60%"} >
                  <Flex direction={'column'} gap={5}>
                    <Flex gap={10}>
                      <StatsData query={"testMatches"} title={"Test matches"} w={"50%"} />
                      <StatsData query={"International"} title={"One-Day Internationals"} w={"50%"} />
                    </Flex>
                    <StatsData query={"otherCricket"} title={"Other cricket"} w={"100%"} />
                  </Flex>
                </Box>
                <StatsData query={"recordbytime"} title={"Records by team"} w={"30%"} />
              </Flex>
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

export default Stats