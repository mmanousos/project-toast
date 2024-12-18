import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ data }) {

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {data.map(toast => {
        const { message, variant, id } = toast;
        return <li key={id} className={styles.toastWrapper}>
          <Toast
            variant={variant}
            id={id}
            message={message}
          />
        </li>
      })}
    </ol>
  );
}

export default ToastShelf;
