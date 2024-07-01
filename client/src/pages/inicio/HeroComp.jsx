export default function HeroComp() {
    const generos = [{
        id: 1,
        nombre: "politica"
    }, {
        id: 2,
        nombre: "paranormal"
    }, {
        id: 3,
        nombre: "mundo"
    }, {
        id: 4,
        nombre: "policiales"
    }, {
        id: 5,
        nombre: "salud"
    }, {
        id: 6,
        nombre: "tecnologia"
    }, {
        id: 7,
        nombre: "cines y series"
    }]

    return (
        <div>
            <section className="font-semibold pt-5 px-1.5 font-mono drop-shadow-sm text-center ">
                <p className="text-2xl phero titulo">Bienvenidos a Criticando TU LUGAR para escribir al respecto sobre las noticias actuales de todo ambito, sin miedo a la censura</p>
                <p className="text-xl phero subtitulo">Animate a escribir como te sentis y expresarte sobre noticias de </p>
                <br />
                {generos.map((genero) => (
                    <section key={genero.id} className='genero'>
                        <p className="uppercase phero text-2xl">{genero.nombre}</p>
                    </section>
                ))}
                <br />
                <p className="text-xl padv  text-orange-600 adv">Antes de escribir la opinion sobre alguna noticia se debe proveer el link de la notica de la que se esta hablando</p>
            </section>
        </div>
    )
}