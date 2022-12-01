import React from "react";
import {Link} from "react-router-dom"
import styles from './Header.module.css'
import {AiOutlineHome, AiOutlineGithub} from "react-icons/ai"
import {MdFavoriteBorder} from "react-icons/md"
const Header = ()=>{
    return <div className={styles.header}>
        <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
            <div className={styles.iconWrapper}>
                <a href="/">
                    <AiOutlineHome className={styles.icon}/>
                </a>
            </div>
            <div className={styles.contacts}>
                <a href="/bookmarks">Bookmarks <MdFavoriteBorder/></a>
                <a href="/">Andrew Stetsiura <AiOutlineGithub/></a>                
            </div>
        </div>
        </div>
    </div>
    
}
export default Header;