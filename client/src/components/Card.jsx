export const Card = ({ titulo, cuerpo }) => {
    return (
        <div className="w-72 h-72 my-8 mx-auto text-center">
            <section className="glassmorphism text-white rounded-sm
             shadow-md shadow-green-300">
                <h3 className="py-3 textocarta">{titulo}</h3>
                <p className="textocarta">{cuerpo}</p>
            </section>
        </div>
    )
}