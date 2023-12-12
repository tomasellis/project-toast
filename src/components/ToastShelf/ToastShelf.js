import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';
import useEscapeKey from '../../hooks/useEscapeKey';

function ToastShelf() {
  //const [stack, setStack] = React.useState([{ message: "Test", variant: "notice", id: "" }])
  const { toasts, clearToasts } = React.useContext(ToastContext)

  const removeOnDismiss = (id) => {
    let nextStack = [...toasts]
    nextStack = nextStack.filter((toast) => toast.id !== id)
    setToasts(nextStack)
  }

  const handleEscape = React.useCallback(() => {
    clearToasts([])
  }, [])

  useEscapeKey(handleEscape)

  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label='Notification'>
      {toasts.map((toast) =>
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} show={true} id={toast.id} handleDismiss={removeOnDismiss}>{toast.message}</Toast>
        </li>
      )}
    </ol>
  );
}

export default ToastShelf;
