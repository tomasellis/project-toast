import React from 'react'

const useEscapeKey = (callback) => {
    React.useEffect(() => {
        const handleEscape = (event) => {
            if (event.code === "Escape") {
                callback(event)
            }
        }
        addEventListener("keydown", handleEscape)

        return () => {
            removeEventListener("keydown", handleEscape)
        }
    }, [])
}

export default useEscapeKey