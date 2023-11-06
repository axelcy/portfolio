import { Tooltip } from "react-tooltip"

const SocialMedia = ({ name, image, tooltip, url, copyText, style = {} }) => {
    const handleClick = () => {
        if (copyText) navigator.clipboard.writeText(copyText)
        if (url) window.open(url)
    }
    return (
        <div>
            <img className='social-media-icon' src={image ? image : `redes/${name}.webp`} style={style}
            data-tooltip-id={`${name}-tooltip`} onClick={handleClick} />
            <Tooltip id={`${name}-tooltip`} >
                <span className='tooltip-text'>{tooltip}</span>
            </Tooltip>
        </div>
    )
}

export default SocialMedia