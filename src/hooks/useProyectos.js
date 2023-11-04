import { proyectos } from "../mocks/proyectos"

const useProyectos = () => {
    return proyectos.map((proyecto, index) => ({...proyecto, starred: localStorage.getItem('starred-' + index) === 'true'}))
}

export default useProyectos