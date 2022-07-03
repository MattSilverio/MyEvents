

import styles from './styles-home.module.css'
import Img1 from '../../Assets/Images/img1.jpg'
import Img2 from '../../Assets/Images/img2.jpg'
import Img3 from '../../Assets/Images/img3.jpg'
import Img4 from '../../Assets/Images/img4.jpg'
import { Button } from '../../Components/Button/Button'
import { Card } from '../../Components/Card/Card'

export default function Home(){
    const imgs = {
        img1:{
            url: Img1,
            id: 0,
        },
        img2:{
            url: Img2,
            id: 1,
        },
        img3:{
            url: Img3,
            id: 2,
        },
        img4:{
            url: Img4,
            id: 3,
        },
    }

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
                    <img src={imgs.img1.url} />
                </div>    
            </section>

            <Button content="veja mais" className="events-page"/>

            <div className={styles.text}>
                <h1>Vários formatos em um só lugar</h1>
                <h1>Seja no mundo físico, digital ou híbrido a gestão do seu negócio em um só lugar</h1>
            </div>

            <Card title="eventos presenciais" description="A maior plataforma do Brasil para a venda de ingressos e gestão completa de eventos presenciais."/>
        </>
    )
}