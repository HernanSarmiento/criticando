import { Link } from "react-router-dom"
export default function PageNotFound() {
    return (
        <div className="bg-red-500 h-46 text-center mt-16 mb-16 font-serif ">
            <div className="py-14">
                <p className="uppercase text-3xl mb-2">Error 404:</p>
                <p className="uppercase text-lg">ooooooooopsssss!!!</p>
                <p className="uppercase text-lg">La pagina solicitada no se encontro o no existe</p>

                <button className="py-2 px-5 bg-sky-400 rounded-lg mt-8">
                <Link to='/'>Regresar al inicio</Link>
                </button>
            </div>
        </div>
    )
}