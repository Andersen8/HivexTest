import { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { Result } from "../../../../apiinterface/data";
import store from "../../../../store/store";
import styles from "./Person.module.css"
import ReactRouterDOM, { Link, useParams } from "react-router-dom"
import axios from "axios"
import {RICK_AND_MORTY_API_ROOT, CHARACTER} from "../../../../constants/api"
import { AppDispatch, RootState } from "../../../../store/store";
import {setPersonToFavorite, removePersonFromFavorites} from "../../../../store/actions/actions"
const Person = ()=>{
    const [person, setPerson] = useState<any>()
    const dispatch: AppDispatch = useDispatch()
    const {id} = useParams()

    const favoritePersons = useSelector((state: RootState)=>state.rootReducer)

   
    useEffect(
         ()=>{ 
            const prs = async()=>{
                const res = await axios(RICK_AND_MORTY_API_ROOT+CHARACTER+'/'+id)                
                setPerson(res.data)
            }
                prs(); 
            },
        []
    )

    const addToBookmarks = (per: Result)=>{
        dispatch(setPersonToFavorite({[per.id]: per}))       
    }
    const removeFromBookmarks = (perId: any)=>{
        dispatch(removePersonFromFavorites(perId))       
    }

    return <div className={styles.person}>
        {
            person && <img src={person.image}/>
        }
        {
           person && <div className={styles.personInfo}>                
                <div>name: {person.name}</div>
                <div>status: {person.status}</div>
                <div>species: {person.species}</div>
                <div>gender: {person.gender}</div>
                <div>origin: <Link className={styles.link} to={person.origin.url}>{person.origin.name}</Link></div>
                <div>location: <Link className={styles.link} to={person.location.url}>{person.location.name}</Link></div>
                {
                    !favoritePersons[person.id] ?
                    <button onClick={()=>addToBookmarks(person)}>ADD TO BOOKMARK</button>
                    : <button onClick={()=>removeFromBookmarks(person.id)}>REMOVE FROM BOOKMARK</button>                
                }
           </div>
        }
        
    </div>
}
export default Person;