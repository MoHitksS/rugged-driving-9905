import { Box } from '@chakra-ui/react'
import React from 'react'
import SearchData from '../Components/SearchData'

const Search = () => {
    return (
        <Box w={'80%'} m={'auto'}>
            <SearchData title={'Search'} dataShowLimit={[1, 3, 4]} />
        </Box>
    )
}

export default Search