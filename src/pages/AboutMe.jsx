import { useState } from 'react'
import './styles/AboutMe.css'

const AboutMe = () => {
    const [session, setSession] = useState({})

    const handleChange = e => setSession(session => ({...session, [e.target.name]: e.target.value }))
    
    const handleSubmit = e => {
        e.preventDefault()
    }
    return(
    <main>
        <div class="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div class="user-box">
                    <input type="text" name="user" required />
                    <label>Usuario</label>
                </div>
                <div class="user-box">
                    <input type="password" name="pass" required />
                    <label>Contraseña</label>
                </div>
                <button type='submit' className='nav-link link-purple'>Ingresar</button>
            </form>
        </div>
    </main>
    )
}

export default AboutMe