import { useState } from "react"
import styles from "./styles-login.module.css"

function initialState(){
    return {username: '', passwors: ''}
}
export function Login(){
    const [values , setValues] = useState(initialState)

    function onChange(event){
        const {value, name} = event.target

        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <div className={styles.loginBox}>
            <form className={styles.userLogin}>
                <h1 className={styles.title}>Acessar MyEvents</h1> 
                <div className={styles.formControl}>
                    <label htmlFor="username">Username</label>
                    <input
                        className={styles.user}
                        type="text"
                        name="user"
                        onChange={onChange}
                        value={values.user}
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="password">Password</label>
                    <input
                        className={styles.password}
                        type="password"
                        name="password"
                        onChange={onChange}
                        value={values.password}
                    />
                </div>

                <button
                    type="submit"
                    className={styles.submitButton}
                >
                    Entrar
                </button>
            </form>
        </div>
    )
}