import styles from './styles-card.module.css'

export default function Card({title, imgSrc, description}){


    return(
        <div className={styles.card}>
            {title && <h1 className={styles.title}>{title}</h1> ||
             imgSrc && <img src={imgSrc} className={styles.img}/>}
            
            <p>{description}</p>
        </div>
    )
}