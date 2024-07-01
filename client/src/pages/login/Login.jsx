import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

export default function Login() {
    const [isShown, setIsShown] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    const togglePassword = () => {
        setIsShown((isShown) => !isShown);
    }

    return (
        <section className="w-2/3 py-20 mx-auto font-semibold text-center border-double border-x-4 border-y-4 border-sky-400 my-5">
            <h2 className="text-xl">Bienvenido Ingrese sus datos para continuar</h2>
            <br />
            <form action={handleSubmit(onSubmit)} className="rounded-sm ">
                <label htmlFor="email">Ingrese su email: </label>
                <br />
                <input {...register('email', {
                    required: true
                })}
                    type="email"
                    className="border-b-2 border-pink-400 " />
                <br />
                <label htmlFor="password">Ingrese su contraseña</label>
                <br />
                <input {...register('password', {
                    required: true,
                    minLength: 8
                })}
                    type={isShown ? 'text' : 'password'}
                    className="border-b-2 border-pink-400" />
                <br />
                <section className="flex ml-[40%]">
                    <p>show password</p>
                    <input type="checkbox" onChange={togglePassword} className="mt-2.5 ml-2" />
                    <button onSubmit={onSubmit}>ingresar</button>
                </section>
            </form>
            <p>No tenes cuenta?
                <span className="text-blue-600 hover:underline">
                    <Link to='/register'> Registrate</Link>
                </span>
            </p>
        </section>
    )
}