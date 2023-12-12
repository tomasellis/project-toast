import React from 'react';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([{
    variant: "notice",
    message: "Testing!", id: crypto.randomUUID()
  }])

  const value = { toasts, setToasts }

  return <ToastContext.Provider value={value}>
    {children}
  </ToastContext.Provider>
}

export default ToastProvider;
