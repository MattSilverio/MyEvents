
import { Link} from "react-router-dom"


import styles from "./style-header.module.css"

export function Header(){


    return(
        <header className={styles.header}>
            <h1 className ={styles.logo}>
                <Link to = "/">MyEvents</Link>
            </h1>

            <nav>
                <Link to="/events">Eventos</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
}