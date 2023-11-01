import './styles/Proyecto.css'
import { Link } from "react-router-dom"

const Proyecto = ({ name, image, url }) => {

    const handleClick = () => window.open(url, '_blank')
    
    return (
        <article className='proyecto' onClick={handleClick}>
            <h2>{name}</h2>
            <img src={`/proyectos/${image}`} />
        </article>
    )
}

export default Proyecto