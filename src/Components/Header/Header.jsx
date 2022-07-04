import { useState } from "react"
import { List, XCircle } from "phosphor-react"
import { Link} from "react-router-dom"


import styles from "./style-header.module.css"

export function Header(){
    const [showMenu, setShowMenu] = useState(false)

    let menuMobile

    if(showMenu){
        menuMobile = <div className={styles.menuMobile}>
        <XCircle size={32} color="white" onClick={() => setShowMenu(false)}/>
        <nav className={styles.navMobile}>
            <Link to="/events">Eventos</Link>
            <Link to="/login">Login</Link>
        </nav>
    </div>
    }

    return(
        <header className={styles.header}>
            <h1 className ={styles.logo}>
                <Link to = "/">MyEvents</Link>
            </h1>

            <div>
                    <List size={32}  onClick={() => setShowMenu(!showMenu)}/>
                <nav className={styles.nav}>
                    <Link to="/events">Eventos</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
            {menuMobile}
        </header>
    )
}