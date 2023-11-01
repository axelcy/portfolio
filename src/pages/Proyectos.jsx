import Proyecto from '../components/Proyecto'
import './styles/Proyectos.css'

const Proyectos = () => {
    return (
        <main>
            <header>
                <p className='code-block'>{'<h1>'}</p>
                <h1 className='code-padding'>Mis proyectos</h1>
                <p className='code-block'>{'</h1>'}</p>
            </header>
                <section className='lista-proyectos'>
                    <Proyecto name='Chinchu-Ranks' image='/chinchu-ranks.png' />
                    <Proyecto name='Chinchu-Ranks' image='/chinchu-ranks.png' />
                    <Proyecto name='Chinchu-Ranks' image='/chinchu-ranks.png' />
                </section>
        </main>
    )
}

export default Proyectos