import React from 'react';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([{
    variant: "notice",
    message: "Testing!",
    id: crypto.randomUUID()
  }])

  const submitToast = (variant, message) => {
    const toast = { variant, message, id: crypto.randomUUID() }
    const nextToasts = [...toasts, toast]
    setToasts(nextToasts)
  }

  const clearToasts = () => {
    setToasts([])
  }

  const dismissToast = (id) => {
    let nextStack = [...toasts]
    nextStack = nextStack.filter((toast) => toast.id !== id)
    setToasts(nextStack)
  }

  const value = { toasts, clearToasts, submitToast, dismissToast }


  return <ToastContext.Provider value={value}>
    {children}
  </ToastContext.Provider>
}

export default ToastProvider;
