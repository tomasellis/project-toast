import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';


const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant = "notice", show, children, id }) {

  const IconTag = ICONS_BY_VARIANT[variant]
  const [dismiss, setDismiss] = React.useState(false)
  const [isHidden, setIsHidden] = React.useState(true)

  const { dismissToast } = React.useContext(ToastContext)

  const handleDismissToast = () => {
    setDismiss(true)
    dismissToast(id)
  }

  //if (!visible) return null

  React.useEffect(() => {
    if (show && !dismiss) setIsHidden(false)
    if (dismiss) setIsHidden(true)
  }, [dismiss, show])

  return (
    <div id={id} key={id} className={`${styles.toast} ${styles[variant]}`} style={{ visibility: isHidden ? "hidden" : "visible" }}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={handleDismissToast}
        aria-label='Dismiss message'
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div >
  );
}

export default Toast;
