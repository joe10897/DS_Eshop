import { useEffect } from "react";

const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
    }
  };

  useEffect(() => {
    if (!callback) return;
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]);
};

export default useClickOutside;
