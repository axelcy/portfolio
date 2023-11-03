import LoginForm from '../components/LoginForm'
import './styles/Home.css'

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
                <div className='first-section'>
                    <header>
                        <p className='code-block'>{'<h1>'}</p>
                            <h1 className='code-padding'>Hola, soy <span className='gradient-text'>Axel</span>!</h1>
                        <p className='code-block'>{'</h1>'}</p>
                    </header>
                    <div>
                        <p className='code-block'>{'<p>'}</p>
                            <p className='strong code-padding'>Full Stack Developer /</p>
                            <p className='code-block code-padding'>{'<a>'}</p>
                                <a className='strong code-padding-2 github-link' 
                                    href='https://github.com/axelcy' target='_blank'>
                                    github.com/axelcy
                                </a>
                            <p className='code-block code-padding'>{'<a>'}</p>
                        <p className='code-block'>{'</p>'}</p>
                    </div>
                </div>
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
                <img className='scroll-arrow' src='/scroll-arrow.png'
                    alt='scroll-arrow'
                    onClick={() => window.scrollTo({top: 1000, behavior: 'smooth'})}
                />
            </section>
            <aside className='loginform-home'>
                <LoginForm />
            </aside>
        </main>
    )
}

export default Home