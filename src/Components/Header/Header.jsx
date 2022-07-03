import { MagnifyingGlass } from "phosphor-react"
import { Link, useLocation } from "react-router-dom"

import styles from "./style-header.module.css"

export function Header(){
    const location = useLocation()


    return(
        <header className={styles.header}>
            <h1 className ={styles.logo}>
                <Link to = "/">MyEvents</Link>
            </h1>

           {location.pathname !== "/" && <form>
                <input 
                    className={styles.searchBar} 
                    type="text" 
                    placeholder="Busque seu evento aqui"   
                /> 
                <MagnifyingGlass size={32} color="#F0ECA8"/>
            </form>}
        </header>
    )
}