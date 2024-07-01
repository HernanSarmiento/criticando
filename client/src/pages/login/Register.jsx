import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auContext'
import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'

const REGISTER_USER = gql`
mutation RegistroUs($registroInput: RegistroInput) {
    registroUs(registroInput: $registroInput) {
        username
        email
        token
    }   
}
`
export default function LoginComp() {

    const context = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = ({ username, email, password }) => {
        
    }

    const [registroUs] = useMutation(REGISTER_USER);
    const [isShown, SetIsShown] = useState(false)
    const togglePassword = () => {
        SetIsShown((isShown) => !isShown)
    }

    return (
        <section>
            <section className="w-2/3 py-20 mx-auto font-semibold text-center border-double border-x-4 border-y-4 border-sky-400">
                <p className="mb-8 mt-[-50px] text-lg text-center text-white underline">Registrate</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Ingrese su usuario</label>
                    <br />
                    {/* {uso de react-hook-form para captuarar dato de input, y especificar requerimientos} */}
                    <input {...register('username', {
                        required: true,
                        minLength: 5
                    })}
                        className="mb-12"
                    />
                    <br />
                    {/* {verificar que se cumplan los requerimientos del input, si hay error se imprime por pantalla} */}
                    {errors.nombre?.type === 'required' && <p className='text-white'>El campo nombre no puede estar vacio</p>}
                    {errors.nombre?.type === 'minLength' && <p className='text-white'>El campo debe tener un minimo de 5 caracteres</p>}

                    <label htmlFor="email">Ingrese su Email</label>
                    <br />
                    <input {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })}
                        className="mb-12"
                    />

                    {errors.email?.type === 'required' && <p className='text-white'>El campo email no puede estar vacio</p>}
                    {errors.email?.type === 'pattern' && <p className='text-red-600'>El formato del email es incorrecto</p>}
                    <br />
                    <label htmlFor="password">Ingrese su Contraseña</label>
                    <br />
                    <input {...register('password', {
                        required: true
                    })}
                        type={isShown ? 'text' : 'password'}
                        className="mb-12 "
                    />
                    <br />
                    
                    <label htmlFor='checkbox'>Show password</label>
                    <input type='checkbox' checked={isShown} onChange={togglePassword} />
                    <br />
                    <button onSubmit={onSubmit}>Registrase</button>
                </form>
            </section>
        </section>
    )
}