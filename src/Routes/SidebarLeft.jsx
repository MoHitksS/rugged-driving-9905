import React from 'react'
import styles from '../CSS/SidebarLeft.module.css'
import SidebarLeftData from '../Components/SidebarLeftData'

const SidebarLeft = () => {
    const keySeries = ['Zimbabwe vs India', 'Asia Cup QLF', 'Asia Cup', 'England vs South Africa', 'West Indies v New Zealand', 'Australia vs Zimbabwe', 'The Hundred (M)', 'The Hundred (M)', 'County Div1', 'County Div2', '6IXTY (M)', '6IXTY (W)', "Women's Championship", "World Test Championship", "World Cup Super League"]
    const quickLinks = ['T20 Time Out', 'T20 Time Out Hindi','ICC Rankings','Fantasy Pick','Haan Ya Naa'];
    const ESPNcricinfo = ['Android App',"iOS App"];
    const follow = ['Instagram','Twitter','Facebook','Youtube'];
    const sites = ['The Cricket Monthly','ESPN'];
    return (
        <div className={styles.sidebarLeft}>
            <SidebarLeftData data={keySeries} title="Key Series" />
            <SidebarLeftData data={quickLinks} title="Quick Links" />
            <SidebarLeftData data={ESPNcricinfo} title="ESPNcricinfo Apps" />
            <SidebarLeftData data={follow} title="Follow ESPNcricinfo" />
            <SidebarLeftData data={sites} title="ESPN Sites" />
        </div>
    )
}

export default SidebarLeft