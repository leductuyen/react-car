import React, { useEffect, useState } from 'react'

const ModalLoading = ({ status, message }) => {
    const [isLoading, setIsLoading] = useState(true) // Ban đầu đặt isLoading là true

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false) // Sau 3 giây, đặt isLoading là false để tắt modal loading
        }, 3000)

        return () => clearTimeout(timer)
    }, []) // useEffect chỉ chạy một lần khi component được render

    const statusClassName = status ? 'success' : 'error'

    return (
        <>
            {isLoading && (
                <div className="loading-modal">
                    <div className={`loading-spinner ${statusClassName}`}>
                        <div className="spinner-inner"></div>
                    </div>
                    <div className="message">{message}</div>
                </div>
            )}
        </>
    )
}

export default ModalLoading
