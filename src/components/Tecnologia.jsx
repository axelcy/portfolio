import './styles/Tecnologia.css'

function Tecnologia({ name, image }) {
  return (
    <li className='tecnologia'>
      <img src={`/tecnologias/${image}`} />
      <span>{name}</span>
    </li>
  )
}

export default Tecnologia