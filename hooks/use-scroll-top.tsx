import { useEffect, useState } from "react";
export const useScrollTop = (threshold = 10) => {
  const [scrolledTop, setScrolledTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > threshold) {
        setScrolledTop(true);
      } else {
        setScrolledTop(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold]);
  return scrolledTop;
};
