import { Outlet, Link } from "react-router-dom"
import './styles/Layout.css'

const Layout = () => {
    return (
        <>
            <nav>
                <div className="nav-link-section">
                    <p className='code-block'>{'<main>'}</p>
                    <h3 className="nav-link link-red"><Link to={'/'}>Home</Link></h3>
                    <p className='code-block'>{'</main>'}</p>
                </div>
                <div className="nav-link-section">
                    <p className='code-block'>{'<section>'}</p>
                    <h3 className="nav-link link-purple"><Link to={'/proyectos'}>Proyectos</Link></h3>
                    <p className='code-block'>{'</section>'}</p>
                </div>
                <div className="nav-link-section">
                    <p className='code-block'>{'<aside>'}</p>
                    <h3 className="nav-link link-blue"><Link to={'/info'}>Más información</Link></h3>
                    <p className='code-block'>{'</aside>'}</p>
                </div>
            </nav>
            <Outlet />
            <footer>
                <img alt='Footer image' src='/favicon.jpg' />
                <p>Hecho con <span className="heart">❤</span> por Axel y Jero</p>
            </footer>
        </>
    )
}

export default Layout