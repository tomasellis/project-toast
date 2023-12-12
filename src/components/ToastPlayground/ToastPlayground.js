import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [message, setMessage] = React.useState("")
  const [variant, setVariant] = React.useState("notice")
  const [toast, setToast] = React.useState({ variant: "notice", message: "" })

  const submitToast = (event) => {
    event.preventDefault()
    const toast = { variant, message }
    setToast(toast)
    setMessage("")
    setVariant("notice")
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toast={toast} />
      <form className={styles.controlsWrapper} onSubmit={submitToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              required
              className={styles.messageInput}
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              onKeyDown={(event) => {
                if (event.code === "Enter") submitToast(event)
              }} />

          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variantType) => {
              return (
                <label htmlFor={`variant-${variantType}`} key={variantType}>
                  <input
                    id={`variant-${variantType}`}
                    type="radio"
                    name={`variant`}
                    value={variantType}
                    checked={variant === variantType}
                    onChange={(event) => { setVariant(event.target.value) }}
                  />
                  {variantType}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onSubmit={submitToast}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
