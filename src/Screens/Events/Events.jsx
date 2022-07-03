import { Card } from "../../Components/Card/Card";

import styles from "./styles-events.module.css"
import img1 from '../../Assets/Images/img1.jpg'

export default function Events(){
    return(
        <div className={styles.containerEvents}>
            <Card imgSrc={img1} description="lorem ipsum dolor sit amet, consectetur adipiscing"/>
            <Card imgSrc={img1} description="lorem ipsum dolor sit amet, consectetur adipiscing"/>
            <Card imgSrc={img1} description="lorem ipsum dolor sit amet, consectetur adipiscing"/>
            <Card imgSrc={img1} description="lorem ipsum dolor sit amet, consectetur adipiscing"/>
            <Card imgSrc={img1} description="lorem ipsum dolor sit amet, consectetur adipiscing"/>
            <Card imgSrc={img1} description="lorem ipsum dolor sit amet, consectetur adipiscing"/>
        </div>
    )
}