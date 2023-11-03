import { useState } from 'react'
import './styles/Formulario.css'

const Formulario = () => {
    const [session, setSession] = useState({})

    const handleChange = e => setSession(session => ({...session, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
    }
    return(
    <main style={{alignItems: 'center', paddingLeft: 0}}>
        {/* <header>
            <p className='code-block'>{'<h1>'}</p>
                <h1 className='code-padding'>This is a <span className='gradient-text'>coool</span> title to login</h1>
            <p className='code-block'>{'</h1>'}</p>
        </header> */}
        <section>   
        <p className='code-block'>{'<form>'}</p>
            <div className='code-padding'>
                <article className='login-box'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='user-box'>
                            <input type='text' name='user' required autoComplete='off' />
                            <label>{"<input name='Usuario' />"}</label>
                        </div>
                        <div className='user-box'>
                            <input type='password' name='pass' required autoComplete='off' />
                            <label>{"<input name='Contraseña' />"}</label>
                        </div>
                        <button type='submit' className='nav-link link-form'>{"<button type='submit' />"}</button>
                    </form>
                </article>
            </div>
        <p className='code-block'>{'</from>'}</p>
        </section>
    </main>
    )
}

export default Formulario