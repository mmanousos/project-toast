import React from 'react';
import useKeyDown from '../../hooks/use-keydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (message, variant) => {
    // add new toast to toasts collection
    const nextToasts = [
        ...toasts, {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    setToasts(nextToasts);
  }

  const dismissToast = (id) => {
    // remove toast from toasts collection by ID
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  // reset the state of the toasts collection - only generate this function once.
  const clearToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  // create the event listener so the toats can be cleared using the Escape key
  useKeyDown('Escape', clearToasts);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
