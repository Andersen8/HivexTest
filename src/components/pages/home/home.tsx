import { Link } from 'react-router-dom'
import { CHARACTER, EPISODE, LOCATION } from '../../../constants/api'
import styles from './home.module.css'

const Home = ()=>{
    return <div className={styles.container}>
        <Link className={styles.item} to={CHARACTER}>Characters</Link>
        <Link className={styles.item} to={LOCATION}>Locations</Link>
        <Link className={styles.item} to={EPISODE}>Episodes</Link>
    </div>
}
export default Home;