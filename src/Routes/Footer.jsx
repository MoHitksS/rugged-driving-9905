import { Box, Flex, Skeleton, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FooterData from '../Components/FooterData';

const Footer = () => {
    const keySeries = ['Zimbabwe vs India', 'Asia Cup QLF', 'Asia Cup', 'England vs South Africa', 'West Indies v New Zealand', 'Australia vs Zimbabwe', 'The Hundred (M)', 'The Hundred (M)', 'County Div1', 'County Div2', '6IXTY (M)', '6IXTY (W)', "Women's Championship", "World Test Championship", "World Cup Super League"]
    const quickLinks = ['T20 Time Out', 'T20 Time Out Hindi', 'ICC Rankings', 'Fantasy Pick', 'Haan Ya Naa'];
    const ESPNcricinfo = ['Android App', "iOS App"];
    const follow = ['Instagram', 'Twitter', 'Facebook', 'Youtube'];
    const sites = ['The Cricket Monthly', 'ESPN'];
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let id = setInterval(() => {
            setLoading(true)
        }, 1000)

        return () => clearInterval(id)
    }, [])
    return (
        <Skeleton isLoaded={loading}>
            <Box w={'100%'}>
                <Flex w={'80%'} m='auto' gap={1} mt={5} mb={5} pt={5} pb={5} borderRadius={8} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                    <FooterData data={keySeries} title="Key Series" />
                    <FooterData data={quickLinks} title="Quick Links" />
                    <FooterData data={ESPNcricinfo} title="ESPNcricinfo Apps" />
                    <FooterData data={follow} title="Follow ESPNcricinfo" />
                    <FooterData data={sites} title="ESPN Sites" />
                </Flex>
                <Box bg={'#edeef0'} w={"100%"} height='80px' alignItems={'center'}>
                    <Flex w={'80%'} m={'auto'} h={'100%'} alignItems={'center'} gap='2' color={'#2B2C2D'}>
                        <Text>Terms Of Use <b>|</b></Text>
                        <Text>Privacy Policy <b>|</b></Text>
                        <Text>Interest-Based Ads <b>|</b></Text>
                        <Text>Addendum to the Global Privacy Policy <b>|</b></Text>
                        <Text>Feedback</Text>
                        <Spacer />
                        <Text fontSize={12} fontWeight={500}>© 2022 ESPN Sports Media Ltd. All rights reserved</Text>
                    </Flex>
                </Box>
            </Box >
        </Skeleton>
    )
}

export default Footer