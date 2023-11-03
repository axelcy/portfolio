import Discord from '../components/Discord'
import Formulario from '../components/Formulario'
import './styles/Home.css'
import { Tooltip } from 'react-tooltip'

const Home = () => {
    const listaTecnologias = [
        'React.JS',
        'Node.JS',
        'Express.JS',
        'TypeScript',
        'MsSQL',
        'Sigma',
        'GitHub',
    ]

    return (
        <main>
            <section className='home'>
                {/* -------------------------------------------------- */}
                <div className='first-section'>
                    <header>
                        <p className='code-block'>{'<h1>'}</p>
                            <h1 className='code-padding'>Hola, soy <span className='gradient-text'>Axel</span>!</h1>
                        <p className='code-block'>{'</h1>'}</p>
                    </header>
                    <div>
                        <p className='code-block'>{'<p>'}</p>
                            <p className='strong code-padding'>/* <span className='code-comment'>Full Stack Developer</span> */</p>
                            <p className='code-block code-padding'>{'<a>'}</p>
                                <a className='strong code-padding-2 github-link' 
                                    href='https://github.com/axelcy/portfolio' target='_blank'>
                                    github.com/axelcy/portfolio
                                </a>
                            <p className='code-block code-padding'>{'<a>'}</p>
                        <p className='code-block'>{'</p>'}</p>
                    </div>
                    <div>
                        <p className='code-block'>{'<footer>'}</p>
                            <div className='code-padding social-media'>
                                <img className='social-media-icon' src='redes/linkedin.png'
                                    data-tooltip-id="linkedin-tooltip" onClick={() => window.open('https://www.linkedin.com/in/axelcy')} />
                                    <Tooltip id="linkedin-tooltip" >
                                        <span className='tooltip-text'>Hacé click para ir a mi perfil de Linkedin!</span>
                                    </Tooltip>
                                <img className='social-media-icon' src='redes/github.png' style={{filter: 'invert(1)'}}
                                    data-tooltip-id="github-tooltip" onClick={() => window.open('https://github.com/axelcy')} />
                                    <Tooltip id="github-tooltip" >
                                        <span className='tooltip-text'>Hacé click para ir a mi perfil de GitHub!</span>   
                                    </Tooltip>
                                    <img className='social-media-icon' src='redes/discord.png'
                                    data-tooltip-id="discord-tooltip" onClick={() => navigator.clipboard.writeText('applecy')}/>
                                    <Tooltip id="discord-tooltip" >
                                            <div className='discord-tooltip'>
                                                <span className='tooltip-text'>Hacé click para copiar mi usuario de Discord!</span>
                                                <Discord />
                                            </div>
                                    </Tooltip>
                                    <img className='social-media-icon' src='redes/gmail.png'
                                    data-tooltip-id="gmail-tooltip" onClick={() => navigator.clipboard.writeText('axelcy@gmail.com')}/>
                                    <Tooltip id="gmail-tooltip" >
                                        <span className='tooltip-text'>axelcy@gmail.com</span>   
                                    </Tooltip>
                            </div>
                        <p className='code-block'>{'</footer>'}</p>
                    </div>
                </div>
                {/* -------------------------------------------------- */}
                <div className='flex-right padding-right'>
                    <div>
                    <div>
                        <p className='code-block'>{'<h2>'}</p>
                        <h2 className='code-padding code-padding-right'>Mis <span className='gradient-text-3'>Tecnologías</span></h2>
                        <p className='code-block'>{'</h2>'}</p>
                    </div>
                    <div>
                        <p className='code-block'>{'<ul>'}</p>
                        <ul className='strong code-block code-padding-right'>
                            {
                                listaTecnologias.map((tecnologia, index) => <li key={index}>{tecnologia}</li>)
                            }
                        </ul>
                        <p className='code-block'>{'</ul>'}</p>
                    </div>
                    </div>
                </div>
                {/* -------------------------------------------------- */}
                <img className='scroll-arrow' src='/scroll-arrow.png'
                    alt='scroll-arrow'
                    onClick={() => window.scrollTo({top: 1000, behavior: 'smooth'})}
                />
            </section>

            <aside className='loginform-home'>
                <Formulario />
            </aside>
        </main>
    )
}

export default Home