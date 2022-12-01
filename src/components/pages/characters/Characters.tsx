import React, { useEffect, useState } from "react";
import { Result, RootObject } from "../../../apiinterface/data";
import { RICK_AND_MORTY_API_ROOT, CHARACTER, PAGE, HIVECSTEST } from "../../../constants/api";
import axios from "axios"
import styles from "./Characters.module.css"
import {AiOutlineSearch, AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

const Characters = ()=>{

    const [characters, setCharacters] = useState<RootObject>()
    const [page, setPage] = useState(1)
    const [charfilter, setCharFilter] = React.useState("");
    const navigate = useNavigate()

    useEffect(  ()=>{
        const res = async()=>{
            const res = await axios(RICK_AND_MORTY_API_ROOT+CHARACTER+PAGE+page)
            setCharacters(res.data)            
        }
        res()
    },[page])

    const nextPage = async ()=>{
        setPage(page+1)
        const res = await axios(RICK_AND_MORTY_API_ROOT+CHARACTER+PAGE+page)
        setCharacters(res.data)
    }
    const prevPage = async ()=>{
        setPage(page-1)
        const res = await axios(RICK_AND_MORTY_API_ROOT+CHARACTER+PAGE+page)
        setCharacters(res.data)
    }
    return <>

        <div className={styles.search}>
            <AiOutlineSearch className={styles.icon}/>
            <input className={styles.input} value={charfilter} onChange={(e)=>setCharFilter(e.target.value)}/>
        </div>
        
        <ul className={styles.charList}>
        {
            characters && charfilter==='' && characters.results.map((el: any, ind: any)=>{
                return <Link to={'/HivexTest/character/'+el.id}>
                <li key={ind} className={styles.listItem}
                >
                    <img src={el.image} className={styles.image}/>
                    <div className={styles.itemtext}>{el.name}</div>                                          
                </li>
                </Link>
            })
        }
        {
            characters && charfilter!=='' && characters.results.filter((el)=>{
                return el.name.toLowerCase().includes(charfilter.toLowerCase())
            }).map((el: any, ind: any)=>{            
                return <Link to={'/HivexTest/character/'+el.id}>
                    <li key={ind} 
                        className={styles.listItem}
                    >
                        <img src={el.image}/>
                        <p>{el.name}</p>
                    </li>
                </Link>
            })
        } 
    </ul>
    <div className={styles.paginator}>
        <button onClick={()=>{prevPage()}}><AiFillCaretLeft className={styles.icon}/></button>
        {page}
        <button onClick={()=>{nextPage()}}><AiFillCaretRight className={styles.icon}/></button>
    </div>
    </>
    
    
}
export default Characters;