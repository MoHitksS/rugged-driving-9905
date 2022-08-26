import React, { useRef, useState } from 'react'
import {  Flex, Image, Spacer, Text } from '@chakra-ui/react'
import { MoonIcon, BellIcon } from '@chakra-ui/icons'
import styles from '../CSS/Navbar.module.css'
import { Link } from 'react-router-dom'
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import MatchData from '../Components/MatchData'
const Navbar = () => {
    const box = useRef(0)
    const matchesData = [{
        title: 'Matches',
        no: '9'
    },
    {
        title: 'Asia Cup QLF',
        no: '2'
    },
    {
        title: 'Maharaja T20',
        no: '2'
    },
    {
        title: '6IXTY (W)',
        no: '3'
    },
    {
        title: "Women's Hundred",
        no: '1'
    },
    {
        title: "Men's Hundred",
        no: '1'
    }]

    const rightLink = [
        {
            title: 'Live Scores',
            path: '/Live-score'
        },
        {
            title: 'Teams',
            path: '/Teams'
        },
        {
            title: 'News',
            path: '/News'
        },
        {
            title: 'Features',
            path: '/Features'
        },
        {
            title: 'Videos',
            path: '/Videos'
        },
        {
            title: 'Stats',
            path: '/Stats'
        }
    ]
    const [matchType, setMatchType] = useState("Matches");
    
    const handleClick = (title) =>{
        setMatchType(title);
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.navbarTopSection}>
                <div className={styles.navbarTopHeadingSection}>
                    <Flex gap='15px' color='white' cursor={'pointer'}>
                        {matchesData.map((ele,index) => (
                            <span key={index} ref={box} onClick={()=>handleClick(ele.title)}>{ele.title} ({ele.no}) </span>
                           
                        ))}
                    </Flex>
                </div>
                <div className={styles.navbarTopDataSection}>
                    <MatchData matchType={matchType}/>
                </div>
            </div>
            <div className={styles.navbarContainer}>
                <div className={styles.navbarSection}>
                    <Flex>
                        <div className={styles.navbarLeftSection}>
                            <Flex alignItems='center' gap='8' height='3rem' color={'white'}>
                                <div className={styles.navbarLeftImageSection}>
                                    <Link to='/'><Image src='https://wassets.hscicdn.com/static/images/logo.png' alt='logo.png'></Image></Link>
                                </div>
                                <Spacer />
                                <div className={styles.navbarRightDataSection}>
                                    <Flex gap='5' alignItems='center'>
                                        {rightLink.map((link,index) => (
                                            <Link key={index} to={link.path}>{link.title}</Link>
                                        ))}
                                    </Flex>
                                </div>
                            </Flex>
                        </div>
                        <Spacer />
                        <div className={styles.navbarRightSection}>
                            <div>
                                <Flex alignItems='center' height={50} gap={'6'} color='white'>
                                    <Link to='/'>
                                        <Flex gap={'2'}>
                                            <Image height='25px' src='https://wassets.hscicdn.com/static/images/fantasy-home.png' alt='fantasy-home.png'></Image>
                                            <Text>Fantasy</Text>
                                        </Flex>
                                    </Link>
                                    <Link to='/'>Edition IN</Link>
                                    <MoonIcon w='5' h='5' />
                                    <BellIcon w='6' h='6' />
                                    <GTranslateIcon />
                                    <AppsIcon />
                                    <SearchIcon />
                                </Flex>
                            </div>
                        </div>
                    </Flex>
                </div>
            </div>
        </div>
    )
}

export default Navbar