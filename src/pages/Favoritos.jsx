import './styles/Favoritos.css'
import Discord from '../components/Discord'
import Formulario from '../components/Formulario'
import useProyectos from '../hooks/useProyectos'
import Proyecto from '../components/Proyecto'
import { SadFace, Star } from '../assets/Icons'

const Favoritos = () => {
    return(
        <main style={{alignItems: 'center', paddingLeft: 0}}>
            {/* <Formulario /> */}
            {/* <Discord /> */}
            <header>
                <p className='code-block'>{'<h1>'}</p>
                    <h1 className='code-padding'>Proyectos <span className='gradient-text'>favoritos</span>!</h1>
                <p className='code-block'>{'<h1>'}</p>
            </header>
            <section className='lista-proyectos'>
                {
                useProyectos().filter(({starred}) => starred).map(({name, image, url, starred}, index) => (
                    <Proyecto key={index} index={index} name={name} image={image} url={url} starred={starred} />
                    ))
                }
            </section>
            {
                useProyectos().filter(({starred}) => starred).length === 0 && 
                <div className='sin-favoritos'>
                    <SadFace />
                    <h3>Parece que no tenés ningún proyecto en favoritos...</h3>
                    <p className='strong'>Prueba agregar algunos con <span className='star-text'><Star /></span></p>
                </div>
            }
        </main>
    )
}

export default Favoritos