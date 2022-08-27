import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from '../CSS/MatchData.module.css'
import { SimpleGrid, Stack } from '@chakra-ui/react'

const MatchData = ({ matchType }) => {
    const [data, setData] = useState([])
    const api = matchType !== "Matches" ? `https://apna-mock-server.herokuapp.com/espncricinfo?q=${matchType}&_limit=4` : `https://apna-mock-server.herokuapp.com/espncricinfo?_limit=4`;

    useEffect(() => {
        axios.get(api).then(res => (
            setData(res.data)
        )).catch(error => (
            console.log(error)
        ))
    }, [api]);

    return (
        <SimpleGrid columns={[1,1,4]} w={"100%"} gap={5}>
            {data?.map((ele, index) => (
                    <div className={styles.matchData} key={index}>
                        <span><span className={styles.matchDataDay}>{ele.day},{ele.time}</span> • {ele.tournamnetType} • {ele.city}</span>
                        <div className={styles.flagSection}>
                            <img src={ele.flag1} alt={ele.team1} />
                            <span>{ele.team1}</span>
                        </div>
                        <div className={styles.flagSection}>
                            <img src={ele.flag2} alt={ele.team2} />
                            <span>{ele.team2}</span>
                        </div>
                        <Stack>
                            {ele.matchTime !== "" ? <span className={styles.matchStart}>Match Starts in {ele.matchTime}</span> : <span className={styles.matchStart}>Match yet to begin</span>}
                        </Stack>
                        <Stack>
                            <hr />
                        </Stack>
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