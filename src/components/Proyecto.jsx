import './styles/Proyecto.css'

const Proyecto = ({ name, image }) => {
    return (
        <article className='proyecto'>
            <h2>{name}</h2>
            <img src={`/proyectos/${image}`} />
        </article>
    )
}

export default Proyecto