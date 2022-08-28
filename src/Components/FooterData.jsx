import { Container, Flex, Skeleton, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { DarkModeContext } from '../ContextApi/DarkModeContext'
import { useContext } from 'react';
const FooterData = ({ data, title }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let id = setInterval(() => {
            setLoading(true)
        }, 1000)

        return () => clearInterval(id)
    }, [])
    const { style } = useContext(DarkModeContext)
    return (
        <Container w={'19%'} style={style}>
            <Skeleton isLoaded={loading}>
                <Text fontWeight={'bold'} align={'left'} color={'#454647'} style={style}>{title}</Text>
                <hr />
                <Flex direction={'column'} alignItems={'flex-start'} gap={3}>
                    {data.map((ele, index) => (
                        <Text fontWeight={'200'} fontSize={'15'} key={index}>{ele}</Text>
                    ))}
                </Flex>
            </Skeleton>
        </Container>
    )
}

export default FooterData