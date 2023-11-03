import './styles/Favoritos.css'
import Discord from '../components/Discord'
import Formulario from '../components/Formulario'

const Favoritos = () => {
    return(
        <main style={{alignItems: 'center', paddingLeft: 0}}>
            <Formulario />
            <Discord />
        </main>
    )
}

export default Favoritos