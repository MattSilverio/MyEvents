import { MaskSad } from "phosphor-react"
import { useLocation } from "react-router-dom"
import { Button } from "../../Components/Button/Button"

import styles from "./styles-error.module.css"

export function Error(){
    const location = useLocation()

    return (
        <div className={styles.message}>
            <h1>Error 404</h1>
            <p>"{location.pathname}" Not found</p>
            <MaskSad size={32} />
            <Button content="ver eventos" />
        </div>
    )
}