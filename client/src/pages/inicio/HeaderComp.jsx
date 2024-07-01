import { Link } from "react-router-dom"

export default function HeaderComp() {
    return (

        <div className="sticky top-0 flex justify-between h-16 mx-3 border-indigo-500 opacity-85">
            <section>

                {/* efectos logo */}
                <h1 className="pl-5 mt-2 font-serif text-3xl tracking-widest text-blue-600 uppercase logo">
                    Criticando
                </h1>
            </section>
                {/* Links */}
            <section>
                <ul className="flex font-mono capitalize drop-shadow-sm">
                    <li><Link to='/'>inicio</Link></li>
                    <li><Link to='/noticias'>noticias</Link></li>
                    <li><Link to='/login'>logIn</Link></li>
                </ul>
            </section>
        </div>
    )
}