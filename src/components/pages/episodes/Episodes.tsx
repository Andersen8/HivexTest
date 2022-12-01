import { useEffect, useState } from "react";
import {RootObject} from "../../../apiinterface/episodesData"
import {GiFilmStrip} from "react-icons/gi"
import {AiOutlineSearch, AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai"
import styles from "./Episodes.module.css"
import axios from "axios"
import {RICK_AND_MORTY_API_ROOT, EPISODE, PAGE} from "../../../constants/api"
const Episodes = () => {
    const [episodes, setEpisodes] = useState<RootObject>()
    const [episodesPage, setEpisodesPage] = useState(1)
    const [episodesFilter, setEpisodesFilter] = useState("");
    useEffect(()=>{
        const res = async ()=>{
            const result = await axios(RICK_AND_MORTY_API_ROOT+EPISODE+PAGE+episodesPage)
            setEpisodes(result.data)
        }
        res();
    },[episodesPage])
    const nextPage = async ()=>{
        setEpisodesPage(episodesPage+1)
        const res = await axios(RICK_AND_MORTY_API_ROOT+EPISODE+PAGE+episodesPage)
        setEpisodes(res.data)
    }
    const prevPage = async ()=>{
        setEpisodesPage(episodesPage-1)
        const res = await axios(RICK_AND_MORTY_API_ROOT+EPISODE+PAGE+episodesPage)
        setEpisodes(res.data)
    }
    return <div className={styles.container}>
        <div className={styles.search}>
            <AiOutlineSearch className={styles.icon}/>
            <input className={styles.input} value={episodesFilter} onChange={(e)=>setEpisodesFilter(e.target.value)}/>
        </div>
        {
            episodes && episodesFilter==='' && episodes.results.map((el: any, ind: number)=>{
                return <div key={ind} className={styles.wrapper}>
                            <div className={styles.iconWrapper}><GiFilmStrip className={styles.iconLeft}/></div>
                            <div  className={styles.location}>
                                <div>name: {el.name}</div>
                                <div>type: {el.type}</div>
                                <div>dimension: {el.dimension}</div>  
                            </div>                 
                            <div className={styles.iconWrapper}><GiFilmStrip className={styles.iconRight}/></div>                
                </div>
            })
        }
        {
            episodes && episodesFilter!=='' && episodes.results.filter((el)=>{
                return el.name.toLowerCase().includes(episodesFilter.toLowerCase())
            }).map((el: any, ind: number)=>{
                return <div key={ind} className={styles.wrapper}>
                            <div className={styles.iconWrapper}><GiFilmStrip className={styles.iconLeft}/></div>
                            <div  className={styles.location}>
                                <div>name: {el.name}</div>
                                <div>type: {el.type}</div>
                                <div>dimension: {el.dimension}</div>  
                            </div>                 
                            <div className={styles.iconWrapper}><GiFilmStrip className={styles.iconRight}/></div>                
                </div>
            })
        }
        <div className={styles.paginator}>
        <button onClick={()=>{prevPage()}}><AiFillCaretLeft className={styles.icon}/></button>
        {episodesPage}
        <button onClick={()=>{nextPage()}}><AiFillCaretRight className={styles.icon}/></button>
    </div>
    </div>
    
}
export default Episodes;