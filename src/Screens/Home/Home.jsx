

import styles from './styles-home.module.css'
import Img1 from '../../Assets/Images/img1.jpg'
import Img2 from '../../Assets/Images/img2.jpg'
import Img3 from '../../Assets/Images/img3.jpg'
import Img4 from '../../Assets/Images/img4.jpg'
import { Button } from '../../Components/Button/Button'
import { Card } from '../../Components/Card/Card'
import { useEffect, useState } from 'react'

let i = 0

export default function Home(){
    const imgs = [Img1, Img2, Img3, Img4] // pode ser o retorno de um objeto JSON de uma api
    const [imgSrc , setImgSrc] = useState(imgs[0])

    useEffect(() =>{
        setTimeout(() =>{
            if(i === imgs.length + 1){
                i = 0
                setImgSrc(imgs[i]);
                i++;
            }else{
                setImgSrc(imgs[i]);
                i++;

            }
        }, 5000)
    }, [imgSrc])
    

    return (
        <>
            <section className={styles.announcement}>
                <div className={styles.textAnouncement}>
                    <h1>
                        Produza eventos e conteúdos digitais na maior plataforma do Brasil
                    </h1>

                    <p>
                        Soluções completas para produtores de eventos e empreendedores digitais, desde a publicação, gestão, venda e entrega.
                    </p>

                </div>

                <div className={styles.banner}>
                    <img src={imgSrc} />
                </div>    
            </section>

            <Button content="veja mais" className="events-page"/>

            <div className={styles.text}>
                <h1>Vários formatos em um só lugar</h1>
                <h1>Seja no mundo físico, digital ou híbrido a gestão do seu negócio em um só lugar</h1>
            </div>

            <div className={styles.containerCards}>
                <Card title="eventos presenciais" description="A maior plataforma do Brasil para a venda de ingressos e gestão completa de eventos presenciais."/>
                <Card title="eventos digitais" description="A maior plataforma do Brasil para a venda de ingressos e gestão completa de eventos digitais."/>
                <Card title="eventos hibrídos" description="A maior plataforma do Brasil para a venda de ingressos e gestão completa de eventos hibrídos."/>
            </div>
        </>
    )
}