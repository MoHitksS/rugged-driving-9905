import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from '../CSS/MatchData.module.css'
import { SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { DarkModeContext } from '../ContextApi/DarkModeContext'
import { useContext } from 'react';
const {REACT_APP_API} = process.env

const MatchData = ({ matchType }) => {
    const [data, setData] = useState([])
    const api = matchType !== "Matches" ? `${REACT_APP_API}/espncricinfo?q=${matchType}&_limit=4` : `${REACT_APP_API}/espncricinfo?_limit=4`;
    useEffect(() => {
        axios.get(api).then(res => (
            setData(res.data)
        )).catch(error => (
            console.log(error)
        ))
    }, [api]);
    const { style, mode } = useContext(DarkModeContext)
    const getStyle = (mode) => {
        return mode ? {
            backgroundColor: '#2b2c2d',
            color: "white"
        } : {
            backgroundColor: 'white',
        }
    }

    const newStyle = getStyle(mode)

    const gethrStyle = (mode) => {
        return mode ? {
            borderBottom: '1px solid #555657'
        } : {
            borderBottom: '1px solid #edeef0'
        }
    }

    const hrStyle = gethrStyle(mode)


    return (
        <SimpleGrid columns={[1, 1, 4]} w={"100%"} gap={2}>
            {data?.map((ele, index) => (
                <div className={styles.matchData} key={index} style={newStyle}>
                    <span><span className={styles.matchDataDay} style={newStyle}>{ele.day},{ele.time}</span> • {ele.tournamnetType} • {ele.city}</span>
                    <div className={styles.flagSection} >
                        <img src={ele.flag1} alt={ele.team1} />
                        <span style={newStyle}>{ele.team1}</span>
                    </div>
                    <div className={styles.flagSection} >
                        <img src={ele.flag2} alt={ele.team2} />
                        <span style={newStyle}>{ele.team2}</span>
                    </div>
                    <Stack>
                        {ele.matchTime !== "" ? <span className={styles.matchStart}>Match Starts in {ele.matchTime}</span> : <span className={styles.matchStart}>Match yet to begin</span>}
                    </Stack>
                    <Text mt={1} mb={2} style={hrStyle} />
                    <div className={styles.bottomSection}>
                        <span>Schedule</span>
                        <span>Table</span>
                        <span>Fantasy</span>
                    </div>
                </div>
            ))}
        </SimpleGrid >
    )
}

export default MatchData