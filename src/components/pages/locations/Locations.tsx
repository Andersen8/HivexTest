import { useEffect, useState } from "react";
import styles from "./Locations.module.css"
import axios from "axios"
import {RICK_AND_MORTY_API_ROOT, LOCATION, PAGE} from "../../../constants/api"
import {RootObject} from "../../../apiinterface/locationData"
import {IoPlanetOutline} from "react-icons/io5"
import {AiFillCaretLeft, AiFillCaretRight, AiOutlineSearch} from "react-icons/ai"
const Locations = ()=>{
   const [locations, setLocations] = useState<RootObject>()
   const [locationPage, setLocationPage] = useState(1)
   const [locationFilter, setLocationFilter] = useState("");
    useEffect(()=>{
        const res = async()=>{
            const res = await axios(RICK_AND_MORTY_API_ROOT+LOCATION+PAGE+locationPage)
            setLocations(res.data)
        }
        res()
    },[locationPage])
    const nextPage = async ()=>{
        setLocationPage(locationPage+1)
        const res = await axios(RICK_AND_MORTY_API_ROOT+LOCATION+PAGE+locationPage)
        setLocations(res.data)
    }
    const prevPage = async ()=>{
        setLocationPage(locationPage-1)
        const res = await axios(RICK_AND_MORTY_API_ROOT+LOCATION+PAGE+locationPage)
        setLocations(res.data)
    }
return <div className={styles.container}>
        <div className={styles.search}>
            <AiOutlineSearch className={styles.icon}/>
            <input className={styles.input} value={locationFilter} onChange={(e)=>setLocationFilter(e.target.value)}/>
        </div>
    {
        locations && locationFilter==='' && locations.results.map((el: any, ind: number)=>{
            return <div key={ind} className={styles.wrapper}>
                        <div className={styles.iconWrapper}><IoPlanetOutline className={styles.iconLeft}/></div>
                        <div  className={styles.location}>
                            <div>name: {el.name}</div>
                            <div>type: {el.type}</div>
                            <div>dimension: {el.dimension}</div>  
                        </div>                 
                        <div className={styles.iconWrapper}><IoPlanetOutline className={styles.iconRight}/></div>                
            </div>
        })
    }
    {
        locations && locationFilter!=='' && locations.results.filter((el)=>{
            return el.name.toLowerCase().includes(locationFilter.toLowerCase())
        }).map((el: any, ind: number)=>{
            return <div key={ind} className={styles.wrapper}>
                        <div className={styles.iconWrapper}><IoPlanetOutline className={styles.iconLeft}/></div>
                        <div  className={styles.location}>
                            <div>name: {el.name}</div>
                            <div>type: {el.type}</div>
                            <div>dimension: {el.dimension}</div>  
                        </div>                 
                        <div className={styles.iconWrapper}><IoPlanetOutline className={styles.iconRight}/></div>                
            </div>
        })
    }
    <div className={styles.paginator}>
        <button onClick={()=>{prevPage()}}><AiFillCaretLeft className={styles.icon}/></button>
        {locationPage}
        <button onClick={()=>{nextPage()}}><AiFillCaretRight className={styles.icon}/></button>
    </div>
</div>
}
export default Locations;