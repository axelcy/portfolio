import './styles/Favoritos.css'
import Discord from '../components/Discord'
import Formulario from '../components/Formulario'
import useProyectos from '../hooks/useProyectos'
import Proyecto from '../components/Proyecto'

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
            {
                useProyectos().filter(({starred}) => starred).map(({name, image, url, starred}, index) => (
                    <Proyecto key={index} index={index} name={name} image={image} url={url} starred={starred} />
                ))
            }
        </main>
    )
}

export default Favoritos