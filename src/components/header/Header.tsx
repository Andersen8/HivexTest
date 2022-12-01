import React from "react";
import {Link} from "react-router-dom"
import styles from './Header.module.css'
import {AiOutlineHome, AiOutlineGithub} from "react-icons/ai"
import {MdFavoriteBorder} from "react-icons/md"
import { BOOKMARKS } from "../../constants/api";
const Header = ()=>{
    return <div className={styles.header}>
        <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
            <div className={styles.iconWrapper}>
                <a href="/HivexTest/">
                    <AiOutlineHome className={styles.icon}/>
                </a>
            </div>
            <div className={styles.contacts}>
                <Link to={'/HivexTest/'+BOOKMARKS}>Bookmarks <MdFavoriteBorder/></Link>
                <a href="https://github.com/Andersen8/HivexTest">Andrew Stetsiura <AiOutlineGithub/></a>                
            </div>
        </div>
        </div>
    </div>
    
}
export default Header;