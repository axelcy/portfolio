import { useEffect } from "react"

const CodeBlock = ({ children, tag = 'span', right = false, removePadding = false, removeContainer = false }) => {

    const getClassName = () => {
        var className = ''
        if (!removePadding) {
            if (right) className += ' code-padding-right'
            else className += ' code-padding'
        }
        return className
    }

    return (
        <>
            <p className='code-block'>{`<${tag}>`} </p>
                {
                    removeContainer ? <>{children}</> :
                    <div className={getClassName()}> {children} </div>
                }
            <p className='code-block'>{`</${tag}>`}</p>
        </>
    )
}

export default CodeBlock