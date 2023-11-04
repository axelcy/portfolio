import Proyecto from '../components/Proyecto'
import useProyectos from '../hooks/useProyectos'
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
                {
                    useProyectos().map(({name, image, url, starred}, index) => (
                        <Proyecto key={index} index={index} name={name} image={image} url={url} starred={starred} />
                    ))
                }
            </section>
        </main>
    )
}

export default Proyectos