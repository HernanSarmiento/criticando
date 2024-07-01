import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InicioPage from './pages/inicio/InicioPage'
import HeaderComp from './pages/inicio/HeaderComp'
import Page from './pages/Noticias/Page'
import Form from './pages/Noticias/Form'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'
import Details from './pages/Noticias/Details'
import Login from './pages/login/Login'
import Register from './pages/login/LoginPage'

export default function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComp />
                <Routes>
                    <Route path='/' element={<InicioPage />} />
                    <Route path='/noticias' element={<Page />} />
                    <Route path='/noticia/:id' element={<Details />} />
                    <Route path='/crearnoticia' element={<Form />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='*' element={<PageNotFound/>} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}