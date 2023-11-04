import { useRef } from 'react'
import { useEffect, useId } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import { v4 as uuidv4 } from 'uuid'


const TypeWriter = ({ text }) => {
    const typewriterid = uuidv4()
    const typewriterRef = useRef()

    useEffect(() => {
        const typewriter = typewriterRef.current
        new Typewriter(typewriter, {
            strings: text,
            autoStart: true,
            delay: 50,
            // cursor: '|',
        }).start()
    }, [])

    return (
        <div id={typewriterid} ref={typewriterRef} className='typewriter'></div>
    )
}

export default TypeWriter