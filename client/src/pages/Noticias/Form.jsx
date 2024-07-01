import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'

export default function Form() {
    
    const noticiaMutation = gql`
        mutation NuevaNoticia($noticiaInput: NoticiaInput) {
        nuevaNoticia(noticiaInput: $noticiaInput) {
                titulo
                thumbnail
                contenido
        }
    }
    `
    const { register, handleSubmit, formState: { errors } } = useForm()

    // recogiendo los datos del formulario
    const onSubmit = ({ titulo, thumbnail, contenido }) => {

        // pasando los datos del formulario al modelo input de noticia
        nuevaNoticia({ variables: { noticiaInput: { titulo, thumbnail, contenido } } })
    }

    const [nuevaNoticia] = useMutation(noticiaMutation)


    return (
        <section className='py-5 my-8'>
            <h2>Por favor rellena los campos para crear Tu Noticia</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='px-5'>

                <label htmlFor="titulo" >Titulo de la noticia</label>
                <br />

                <input {...register('titulo', { required: true, minLength: 10 })} placeholder='titulo de la noticia' className='w-[50%]' />

                {errors.titulo?.type === 'required' && <p className='text-red-600'>El campo no puede estar vacio</p>}
                {errors.titulo?.type === 'minLength' && <p className='text-red-600'>Este campo espera al menos 10 caracteres</p>}

                <br />

                <label htmlFor="thumbnail">Imagen de la noticia</label>
                <br />
                <input {...register('thumbnail')} className='mb-5 w-[50%]' placeholder='opcional link/url de imagen' />

                <br />
                <label htmlFor="contenido">Contenido de la noticia</label>

                <br />
                <textarea {...register('contenido', { required: true, minLength: 50 })}
                    className='rounded-md w-full h-64'
                    placeholder='cuerpo de la noticia' />

                {errors.contenido?.type === 'required' && <p className='text-red-600'>El campo no puede estar vacio</p>}
                {errors.contenido?.type === 'minLength' && <p className='text-red-600'>Este campo espera al menos 50 caracteres</p>}

            <button onSubmit={onSubmit}>Añadir noticia</button>
            </form>
        </section>
    )
}
