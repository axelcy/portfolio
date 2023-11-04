import { Outlet, Link } from "react-router-dom"
import './styles/Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-link-container">
                <p className='code-block'>{'<main>'}</p>
                <h3 className="nav-link link-red"><Link to={'/'}>Home</Link></h3>
                <p className='code-block'>{'</main>'}</p>
            </div>
            <div className="nav-link-container">
                <p className='code-block'>{'<section>'}</p>
                <h3 className="nav-link link-purple"><Link to={'/proyectos'}>Proyectos</Link></h3>
                <p className='code-block'>{'</section>'}</p>
            </div>
            <div className="nav-link-container">
                <p className='code-block'>{'<aside>'}</p>
                <h3 className="nav-link link-blue"><Link to={'/favoritos'}>Favoritos</Link></h3>
                <p className='code-block'>{'</aside>'}</p>
            </div>
        </nav>
    )
}

export default Navbar