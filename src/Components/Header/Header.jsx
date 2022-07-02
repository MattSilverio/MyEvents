import { Link } from "react-router-dom"

import styles from "./style-header.module.css"

export function Header(){

    return(
        <header className={styles.header}>
            <h1 className ={styles.logo}>
                <Link to = "/">MyEvents</Link>
            </h1>

            <form>
                <input className={styles.searchBar} type="text" placeholder="Busque seu evento aqui" />       
            </form>
        </header>
    )
}