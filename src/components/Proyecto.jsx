import "./styles/Proyecto.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Star } from "../assets/Icons";

const Proyecto = ({ name, image, url, starred, index }) => {

    const [isHovered, setIsHovered] = useState(false)
    const [isStarred, setIsStarred] = useState(starred)

    useEffect(() => localStorage.setItem(`starred-${index}`, isStarred), [isStarred])
    
    const handleStarred = () => setIsStarred(!isStarred)
    const handleClick = () => window.open(url, "_blank")
    
    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)
    
    // Al darle hover a la imagen, que aparezca un boton para ir a la pagina
    return (
            <article>
                <p className={`code-block ${isHovered ? 'hovered' : ''}`} >{"<article>"}</p>
                    <div className="proyecto" style={{userSelect: 'none'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Star starred={isStarred} onClick={handleStarred} />
                        <h2>{name}</h2>
                        <img src={`/proyectos/${image}`} onClick={handleClick} />
                        <span className='texto' onClick={handleClick}>Ir al sitio web</span>
                    </div>
                <p className={`code-block ${isHovered ? 'hovered' : ''}`} >{"</article>"}</p>
            </article>
        )
    }

export default Proyecto;
