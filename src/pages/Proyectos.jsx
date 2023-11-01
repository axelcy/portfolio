import Proyecto from '../components/Proyecto'
import './styles/Proyectos.css'

const Proyectos = () => {
    return (
        <main>
            <p className='code-block'>{'<h1>'}</p>
            {/* <h1>git commit -m 'Landing Page Complete'</h1> */}
            <h1>Mis proyectos</h1>
            <p className='code-block'>{'</h1>'}</p>
            <p className='code-block'>{'</p>'}</p>
                <Proyecto name='Chinchu-Ranks' image='/chinchu-ranks.png' />
            <p className='code-block'>{'</p>'}</p>
        </main>
    )
}

export default Proyectos