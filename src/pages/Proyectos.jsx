import Proyecto from '../components/Proyecto'
import './styles/Proyectos.css'

const Proyectos = () => {
    return (
        <main className='proyectos'>
            <header>
                <p className='code-block'>{'<h1>'}</p>
                <h1 className='code-padding'>Mis <span className='gradient-text-2'>proyectos</span>!</h1>
                <p className='code-block'>{'</h1>'}</p>
            </header>
            <section className='lista-proyectos'>
                <Proyecto name='Chinchu-Ranks' image='/chinchu-ranks.png' url='https://valo-ranks.netlify.app/' />
                <Proyecto name='Eco Password' image='/eco-password.png' url='https://eco-password.netlify.app/' />
                <Proyecto name='ORT Resuelve' image='/ort-resuelve.png' url='https://axelcy.github.io/reportes-ort/' />
            </section>
        </main>
    )
}

export default Proyectos