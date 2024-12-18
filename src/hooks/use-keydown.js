import React from 'react';

function useKeyDown (keyCode, fn) {
  return React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === keyCode) {
        fn(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [keyCode, fn]);
}

export default useKeyDown;
