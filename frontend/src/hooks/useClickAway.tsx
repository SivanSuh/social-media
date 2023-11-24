import React, { useEffect } from "react";

const EVENT = "mousedown";

interface UseClickAwayProps {
  ref: React.RefObject<HTMLInputElement>;
  callback: (event: any) => void;
}

const useClickAway: React.FC<UseClickAwayProps> = ({ ref, callback }) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref || !ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
      document.addEventListener(EVENT, listener);
      return () => {
        document.removeEventListener(EVENT, listener);
      };
    };
  }, [ref, callback]);
};

export default useClickAway;
