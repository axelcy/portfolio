import CodeBlock from '../components/CodeBlock'
import Discord from '../components/Discord'
import Formulario from '../components/Formulario'
import SocialMedia from '../components/SocialMedia'
import Tecnologia from '../components/Tecnologia'
import TypeWriter from '../components/TypeWriter'
import { tecnologias } from '../mocks/tecnologias'
import './styles/Home.css'

const Home = () => {
    return (
        <>
        <main>
            <section className='home'>
                {/* -------------------------------------------------- */}
                <div className='first-section'>
                    <header style={{position: 'relative'}}>
                        <CodeBlock tag='h1'>
                            <h1>Hola, soy <span className='gradient-text'>Axel</span>!</h1>
                        </CodeBlock>
                    </header>
                    <CodeBlock tag='p'>
                        <span className='strong'>
                            <TypeWriter text='Tengo 17 años, soy estudiante de ORT Argentina.' />
                        </span>
                        <p className='strong'>/* <span className='code-comment'>Full Stack Developer</span> */</p>
                        <CodeBlock tag='a'>
                            <p>
                                <span className='code-block' style={{display: 'inline'}}>
                                    {'onClick={ '}
                                    <a className='strong github-link' 
                                        href='https://github.com/axelcy/portfolio' target='_blank'>
                                        github.com/axelcy/portfolio
                                    </a>
                                    {' }'}
                                </span>
                            </p>
                        </CodeBlock>
                    </CodeBlock>
                    <CodeBlock tag='footer' removePadding>
                        <div className='social-media'>
                            <SocialMedia name='linkedin' url='https://www.linkedin.com/in/axelcy'
                                tooltip='Hacé click para ir a mi perfil de Linkedin!' 
                                />
                            <SocialMedia name='github' tooltip='Hacé click para ir a mi perfil de GitHub!'
                                url='https://github.com/axelcy' style={{filter: 'invert(1)'}} 
                                />
                            <SocialMedia name='discord' copyText='applecy'
                                tooltip={
                                <div className='discord-tooltip'>
                                    <span className='tooltip-text'>Hacé click para copiar mi usuario de Discord!</span>
                                    <Discord />
                                </div>}
                                />
                            <SocialMedia name='gmail' tooltip='axelcy@gmail.com' copyText='axelcy@gmail.com' />
                            {/* <SocialMedia name='minecraft' tooltip='No tengo premium xd' /> */}
                        </div>
                    </CodeBlock>
                </div>
                {/* -------------------------------------------------- */}
                <div className='flex-right padding-right'>
                    <div>
                        <CodeBlock tag='h2' right removeContainer>
                            <h2 className='code-padding-right'>Mis <span className='gradient-text-3'>Tecnologías</span></h2>
                        </CodeBlock>
                        <CodeBlock tag='ul' right removeContainer>
                            <ul className='strong code-padding-right tecnologias-container'>
                                {
                                    tecnologias.map(({ name, image }, index) => (
                                        <Tecnologia key={index} name={name} image={image} />
                                    ))
                                }
                            </ul>
                        </CodeBlock>
                    </div>
                </div>
                {/* -------------------------------------------------- */}
            </section>

            <img className='scroll-arrow' src='/scroll-arrow.webp'
                    alt='scroll-arrow'
                    onClick={() => window.scrollTo({top: 950, behavior: 'smooth'})}
                />

            <aside className='loginform-home'>
                <main style={{alignItems: 'center', paddingLeft: 0}}>
                    <header>
                        <CodeBlock tag='h2'>
                            <h2>¿ <span className='gradient-text'>Tenés dudas</span> ?</h2>
                        </CodeBlock>
                    </header>
                </main>
                <Formulario />
            </aside>
        </main>
        <div className='home-bottom'>
            Llegaste al final <span>{'<3'}</span> 
        </div>
        </>
    )
}

export default Home