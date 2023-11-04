import { useEffect, useId } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import { v4 as uuidv4 } from 'uuid'


const TypeWriter = ({ text }) => {
    const typewriterid = uuidv4()

    useEffect(() => {
        console.log(`#${typewriterid}`)
        new Typewriter(`#${typewriterid}`, {
            strings: text,
            autoStart: true,
            delay: 50,
            // cursor: '|',
        }).start()
    }, [])

    return (
        <div id={typewriterid} className='typewriter'></div>
    )
}

export default TypeWriter