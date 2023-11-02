import "./styles/Proyecto.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Proyecto = ({ name, image, url }) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleClick = () => window.open(url, "_blank")

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    return (
            <article>
                <p className={`code-block ${isHovered ? 'hovered' : ''}`} >{"<article>"}</p>
                    <div className="proyecto" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <h2>{name}</h2>
                        <img src={`/proyectos/${image}`} />
                    </div>
                <p className={`code-block ${isHovered ? 'hovered' : ''}`} >{"</article>"}</p>
            </article>
        )
    }

export default Proyecto;
