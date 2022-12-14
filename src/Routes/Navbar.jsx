import React, { useContext, useRef, useState } from 'react'
import { Flex, Image, Spacer, Text } from '@chakra-ui/react'
import { MoonIcon, BellIcon } from '@chakra-ui/icons'
import styles from '../CSS/Navbar.module.css'
import { Link } from 'react-router-dom'
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import MatchData from '../Components/MatchData'
import { DarkModeContext } from '../ContextApi/DarkModeContext'
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
    const [text, setText] = useState("")
    const { handleMode, style } = useContext(DarkModeContext)
    const handleClick = (title) => {
        setMatchType(title);
    }

    return (
        <div className={styles.navbar} style={style}>
            <div className={styles.navbarTopSection}>
                <div className={styles.navbarTopHeadingSection}>
                    <Flex gap='15px' color='white' cursor={'pointer'}>
                        {matchesData.map((ele, index) => (
                            <span key={index} ref={box} onClick={() => handleClick(ele.title)}>{ele.title} ({ele.no}) </span>

                        ))}
                    </Flex>
                </div>
                <div className={styles.navbarTopDataSection}>
                    <MatchData matchType={matchType} />
                </div>
            </div>
            <div className={styles.navbarContainer} style={style}>
                <div className={styles.navbarSection}>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <div className={styles.navbarLeftSection}>
                            <Flex alignItems='center' gap='8' height='3rem' color={'white'}>
                                <div className={styles.navbarLeftImageSection}>
                                    <Link to='/'><Image src='https://wassets.hscicdn.com/static/images/logo.png' alt='logo.png'></Image></Link>
                                </div>
                                <Spacer />
                                <div className={styles.navbarRightDataSection}>
                                    <Flex gap='5' alignItems='center'>
                                        {rightLink.map((link, index) => (
                                            <Link key={index} to={link.path}>{link.title}</Link>
                                        ))}
                                    </Flex>
                                </div>
                            </Flex>
                        </div>
                        <div className={styles.navbarRightSection}>
                            <div>
                                <Flex alignItems='center' height={50} gap={'6'} color='white'>
                                    <Link to='/'>
                                        <Flex gap={'2'}>
                                            <Image height='25px' src='https://wassets.hscicdn.com/static/images/fantasy-home.png' alt='fantasy-home.png'></Image>
                                            <Text>Fantasy</Text>
                                        </Flex>
                                    </Link>
                                    <Link to='/'>
                                        <Text fontSize={15}>
                                            Edition IN
                                        </Text>
                                    </Link >
                                    <MoonIcon w='5' h='5' onClick={handleMode} />
                                    <BellIcon w='6' h='6' />
                                    <GTranslateIcon />
                                    <AppsIcon />
                                    <div className="search-box" style={style}>
                                        <input type="text" className="search-input" onChange={(e) => setText(e.target.value)} placeholder="Start Looking For Something!" />
                                        <Link to={`/Search`} state={{ query: text }} className="search-btn" href="#" style={style}>
                                            <SearchIcon />
                                        </Link>
                                    </div>
                                </Flex>
                            </div>
                        </div>
                    </Flex>
                </div >
            </div >
        </div >
    )
}

export default Navbar