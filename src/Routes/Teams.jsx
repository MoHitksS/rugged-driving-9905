import { Box } from '@chakra-ui/react'
import React from 'react'
import TeamsData from '../Components/TeamsData'

const Teams = () => {
  return (
    <Box w={"80%"} m={'auto'}>
        <TeamsData title={"POPULAR INTERNATIONAL TEAMS"} query={"PopularInternationalTeams"}/>
        <TeamsData title={"POPULAR WOMEN'S TEAMS"} query={"PopularWomensTeams "}/>
        <TeamsData title={"IPL 2022 TEAMS"} query={"Ipl2022Teams"}/>
    </Box>
  )
}

export default Teams