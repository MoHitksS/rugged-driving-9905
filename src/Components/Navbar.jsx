import React from 'react'
import { Container, Flex, Image, Spacer } from '@chakra-ui/react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const matchesData = [{
        title: 'Matches',
        no: '2'
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
        no: '2'
    },
    {
        title: "Men's Hundred",
        no: '2'
    },
    {
        title: "IRE-W in NL",
        no: '1'
    }]

    const rightLink = [
        {
            title: 'Live Scores',
            path: '/live-score'
        },
        {
            title: 'Series',
            path: '/series'
        },
        {
            title: 'Teams',
            path: '/teams'
        },
        {
            title: 'News',
            path: '/news'
        },
        {
            title: 'Features',
            path: '/features'
        },
        {
            title: 'Videos',
            path: '/videos'
        },
        {
            title: 'Stats',
            path: '/stats'
        }
    ]
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarTopSection}>
                <div className={styles.navbarTopHeadingSection}>
                    <Flex gap='15px' color='white'>
                        {matchesData.map(ele => (
                            <>
                                <span key={Date.now() + Math.random() * 1000}>{ele.title} ({ele.no})</span>
                            </>
                        ))}
                    </Flex>
                </div>
                <div className={styles.navbarTopDataSection}>

                </div>
            </div>
            <div className={styles.navbarContainer}>
                <div className={styles.navbarSection}>
                    <Flex>
                        <div className={styles.navbarLeftSection}>
                            <Flex alignItems='center' gap='8' height='3rem' color={'white'}>
                                <div className={styles.navbarLeftImageSection}>
                                    <Image src='https://wassets.hscicdn.com/static/images/logo.png'></Image>
                                </div>
                                <Spacer />
                                <div className={styles.navbarRightDataSection}>
                                    <Flex gap='5' alignItems='center'>
                                        {rightLink.map(link => (
                                            <Link to={link.path}>{link.title}</Link>
                                        ))}
                                    </Flex>
                                </div>
                            </Flex>
                        </div>
                        <Spacer/>
                        <div className={styles.navbarRightSection}>

                        </div>
                    </Flex>
                </div>
            </div>
        </div>
    )
}

export default Navbar