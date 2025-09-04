import { useEffect, useState } from "react";

const useDeviceType = () => {
  const [isLoaded, setLoaded] = useState(false);
  let isMobile;
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (typeof window !== "undefined") {
    isMobile =
      typeof window !== "undefined" &&
      window.innerWidth <= 700 &&
      window.innerHeight <= 900
        ? true
        : false;
  }

  return { isMobile, isLoaded };
};

export default useDeviceType;
