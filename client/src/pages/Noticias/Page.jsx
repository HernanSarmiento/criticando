import Grilla from './Grilla'
import { Link } from 'react-router-dom'


export default function Page() {
    
    return (
        <div>
         
            <section className='mx-auto text-center my-14'>
                <Grilla/>
                <h2 className='my-8'>Estas Buscando crear una Noticia?</h2>
                <Link to='/crearnoticia' className='text-white text-lg px-5 py-3 bg-indigo-400 rounded-md'>Crear noticia</Link>
            </section>
        </div>

    )
}