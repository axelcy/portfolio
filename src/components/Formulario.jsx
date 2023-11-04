import { useState } from 'react'
import './styles/Formulario.css'
import CodeBlock from './CodeBlock'

const Formulario = () => {
    const [session, setSession] = useState({})

    const handleChange = e => setSession(session => ({...session, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
    }
    return(
    <main style={{alignItems: 'center', paddingLeft: 0}}>
        <section> 
        <CodeBlock tag='form'>
            <article className='login-box'>
                <h2><span>Contactame</span>!</h2>
                <form onSubmit={handleSubmit}>
                    <div className='user-box'>
                        <input type='text' name='email' required autoComplete='off' onChange={handleChange} />
                        <label>{"<input type='email' />"}</label>
                    </div>
                    <div className='user-box'>
                        <input type='password' name='password' required autoComplete='off' onChange={handleChange}/>
                        <label>{"<input type='password' />"}</label>
                    </div>
                    <button type='submit' className='nav-link form-link link-form'>{"<button type='submit' />"}</button>
                </form>
            </article>
        </CodeBlock>
        </section>
    </main>
    )
}

export default Formulario