import React from 'react';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([{
    variant: "notice",
    message: "Testing!",
    id: crypto.randomUUID()
  }])

  const submitToast = (variant, message) => {
    const toast = { variant, message }
    const nextToasts = [...toasts, toast]
    setToasts(nextToasts)
  }

  const clearToasts = () => {
    setToasts([])
  }

  const value = { toasts, clearToasts, submitToast }


  return <ToastContext.Provider value={value}>
    {children}
  </ToastContext.Provider>
}

export default ToastProvider;
