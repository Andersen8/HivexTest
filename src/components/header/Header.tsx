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
                <div className={styles.center}>
                    <a href="/HivexTest/">
                        <AiOutlineHome className={styles.icon}/>
                    </a>
                </div>
                <div className={styles.center}>
                    <Link to={'/HivexTest/'+BOOKMARKS} ><MdFavoriteBorder className={styles.icon}/></Link>
                    <a href="https://github.com/Andersen8/HivexTest"><AiOutlineGithub className={styles.icon}/></a>                
                </div>
            </div>
        </div>
    </div>
    
}
export default Header;