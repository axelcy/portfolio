import { Outlet, Link } from "react-router-dom"
import './styles/Layout.css'

const Layout = () => {
    return (
        <>
            <nav>
                <div className="nav-link-section">
                    <p className='code-block'>{'<main>'}</p>
                    <h2 className="nav-link link-red"><Link to={'/'}>Home</Link></h2>
                    <p className='code-block'>{'</main>'}</p>
                </div>
                <div className="nav-link-section">
                    <p className='code-block'>{'<section>'}</p>
                    <h2 className="nav-link link-purple"><Link to={'/proyectos'}>Proyectos</Link></h2>
                    <p className='code-block'>{'</section>'}</p>
                </div>
                <div className="nav-link-section">
                    <p className='code-block'>{'<article>'}</p>
                    <h2 className="nav-link link-blue"><Link to={'/info'}>Más información</Link></h2>
                    <p className='code-block'>{'</article>'}</p>
                </div>
            </nav>
            <Outlet />
            <footer>
                <img alt='Footer image' src='/favicon.jpg' />
                <span>Hecho con ❤ por Axel y Jero</span>
            </footer>
        </>
    )
}

export default Layout