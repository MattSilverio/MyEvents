import styles from './styles-button.module.css'
import { Link } from 'react-router-dom'

export function Button({content}){
    let path = "/events"
    
    if(content === "crie seu evento"){
        path = "/login"
    }

    return (
        <Link to={path} className={styles.button}>{content}</Link>
    )
}