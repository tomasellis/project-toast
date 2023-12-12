import React from 'react'

const useEscapeKey = (handlePress) => {
    React.useEffect(() => {
        const handleEscape = (event) => {
            if (event.code === "Escape") {
                handlePress()
            }
        }
        addEventListener("keydown", handleEscape)

        return () => {
            removeEventListener("keydown", handleEscape)
        }
    }, [])
}

export default useEscapeKey