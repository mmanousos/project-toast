import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { toasts, createToast } = React.useContext(ToastContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // add new toast to toasts collection in context
    createToast(message, toastVariant);

    // reset internal component state
    setMessage('');
    setToastVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf data={toasts} />

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
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
              className={styles.messageInput}
              value={message}
              onChange={event => {setMessage(event.target.value)}}
            />
          </div>
        </div>

        <fieldset className={styles.row}>
          <legend className={styles.label}>
            Variant
          </legend>

          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
            {VARIANT_OPTIONS.map(option => (
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={toastVariant === option}
                  onChange={event => setToastVariant(event.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>


        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type='submit'>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
