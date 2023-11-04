import './styles/Icons.css'

export const Star = ({onClick, starred}) => {
    var className = 'star icon icon-tabler icon-tabler-star'
    if (starred === true) className += ' starred'
    return (
        <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" className={className} width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
        </svg>
    )
}

export const SadFace = props => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" className="sad-face-icon icon icon-tabler icon-tabler-mood-sad" width={24} height={24} viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
        <path d="M9 10l.01 0"></path>
        <path d="M15 10l.01 0"></path>
        <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0"></path>
    </svg>
)