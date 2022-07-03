import { Card } from "../../Components/Card/Card";
import { MagnifyingGlass } from "phosphor-react"

import styles from "./styles-events.module.css"
import img1 from '../../Assets/Images/img1.jpg'
import JSONData from "../../Utils/MOCK_DATA.json";
import { useState } from "react";

export default function Events(){
    const [searchItem , setSearchItem] = useState('')

    return(
        <>
            <form>
                <input 
                    className={styles.searchBar} 
                    type="text" 
                    placeholder="Busque seu evento aqui"
                    onChange={(event) => {
                        setSearchItem(event.target.value)
                    }}  
                /> 
                <MagnifyingGlass size={32} color="#F0ECA8"/>
            </form>
            <div className={styles.containerEvents}>
            {
                JSONData.filter((item) => {
                if(searchItem == ""){
                    return <Card label={item.color} description={item.description} key={item.id} city={item.location} date={item.date}/>       
                }else if(item.location.toLowerCase().includes(searchItem.toLowerCase())
                    || item.date.toLowerCase().includes(searchItem.toLowerCase())
                ){
                    return <Card label={item.color} description={item.description} key={item.id} city={item.location} date={item.date}/>   
                }
            }).map((item) =>{
                return(
                    <Card label={item.color} description={item.description} key={item.id} city={item.location} date={item.date}/> 
                )
            })
            }
            </div>
        </>
    )
}