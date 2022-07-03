import { useLocation } from 'react-router-dom'
import { Button } from '../Button/Button'
import styles from './styles-card.module.css'

export function Card({title, imgSrc, description}){
    const location = useLocation()

    return(
        <div className={styles.card}>
            {title && <h1 className={styles.title}>{title}</h1> ||
             imgSrc && <img src={imgSrc} className={styles.img}/>}
            
            <p>{description}</p>

            {location.pathname !== '/events' ? <Button content={"crie seu evento"}/>  : <Button content={"inscrever"}/>}
        </div>      
    )
}