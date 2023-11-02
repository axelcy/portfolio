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
        <main className='home'>
            <section className='first-section'>
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
            </section>
            <section className='flex-right padding-right'>
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
            </section>
        </main>
    )
}

export default Home