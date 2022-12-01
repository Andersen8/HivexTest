import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import styles from "./Bookmarks.module.css"
import {Result, RootObject} from "../../../apiinterface/data"
import { useNavigate } from "react-router-dom";
import { CHARACTER } from "../../../constants/api";
const Bookmarks = ()=>{
    const [favorites, setFaforites] = useState<any>()   
    const favoritePersons = useSelector((state: RootState)=>state.rootReducer)
    const navigate = useNavigate()
    useEffect(()=>{
    const data = Object.entries(favoritePersons)
    if(data.length){
        const result = data.map(el=>{
            return {...el}
        })
        console.log(result);
        setFaforites(result)        
    }
   },[])
    const checkPerson = (el: Result)=>{     
        navigate('/HivexTest/'+CHARACTER+'/'+el.id  )
    }
    return <div className={styles.wrapper}>
        <ul className={styles.charList}>
            {
                favorites  && favorites.map((el: any, ind: any)=>{
                    return <li key={ind} className={styles.listItem}
                    onClick={()=>{checkPerson(el[1])}}>
                        <img src={el[1].image} className={styles.image}/>
                        <p className={styles.itemtext}>{el[1].name}</p>                                          
                    </li>
                })
            }
        </ul>
    </div>    
}
export default Bookmarks;