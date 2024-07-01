import { gsap } from 'gsap'
import HeroComp from "./HeroComp";
import { Card } from "../../components/Card";
import { useLayoutEffect } from 'react';

const info = [{
    'titulo': "About Us",
    'cuerpo': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos, repellendus harum distinctio, neque voluptatibus a itaque voluptatem sed commodi ab incidunt dolorum eius molestiae culpa laborum dolorem natus. Optio?"
}, {
    'titulo': "Contactame",
    'cuerpo': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos, repellendus harum distinctio, neque voluptatibus a itaque voluptatem sed commodi ab incidunt dolorum eius molestiae culpa laborum dolorem natus. Optio?"
}
]


export default function InicioPage() {
    
    useLayoutEffect(() => {
        let tl = gsap.timeline()
        tl.to('.titulo,.subtitulo,.genero,.adv,.tarjetas', {
            opacity: 0,
            duration: 0.2
        })
            .to('.titulo', {
                opacity: 1,
                ease: 'power4.inOut',
                duration: 2
            })
            .to('.subtitulo,.genero,.adv,.tarjetas', {
                opacity: 1,
                duration: 2
            })

    }, [])
    return (
        <div>
            <HeroComp />
            <div className="grid grid-cols-2 grid-gap-4">
                {info.map((inf) => (
                    <section key={inf.index} className="flex tarjetas">
                        <Card titulo={inf.titulo} cuerpo={inf.cuerpo} />
                    </section>
                ))}
            </div>
        </div>
    )
}