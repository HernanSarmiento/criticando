import { useNoticia } from './custom-hooks';
import { useParams } from 'react-router-dom';


export default function Details() {
    const { id } = useParams();
    const { data, loading, error } = useNoticia(id);

    if (error) return <p>Error {error.message}</p>
    if (loading) return <p>cargando...</p>

    const { obtenerNoticia } = data;
    const { titulo, thumbnail, contenido, fechaCreado } = obtenerNoticia;

    return (
        <div className='text-white text-center'>
            <h1 className='
            text-2xl pb-4 uppercase font-bold'>{titulo}</h1>
            <img src={thumbnail} className='w-3/5 h-3/5 mx-auto' alt={titulo} />
            <p className='py-5'>{fechaCreado}</p>
            <p className='py-8 text-xl'>{contenido}</p>
        </div>
    )
}