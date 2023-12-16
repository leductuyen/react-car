import React, { useRef } from 'react'

const Input = ({ className, error, ...rest }) => {
    const inputRef = useRef(null)

    return (
        <div className={`input-wrapper ${className}`}>
            <input className="input" type="text" ref={inputRef} {...rest} />
            {error && <span className="error-message">{error}</span>}
        </div>
    )
}

export default Input
