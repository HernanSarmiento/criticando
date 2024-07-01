


export default function Card({ noticias }) {

   
    return (
        <article className="bg-slate-300 my-5">

            {/* contenedor de la tarjeta */}
            <section className="text-center shadow-md shadow-sky-500 border-b-2 border-sky-200 p-5 rounded-md">
                 <img src={data.thumbnail} className="mx-auto" />
                <h2 className="text-xl uppercase pb-3">{data.titulo}</h2>

                <p></p>
            </section>
        </article>
    )
}