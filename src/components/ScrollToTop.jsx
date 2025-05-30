import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Disable browser scroll restoration to avoid conflicts
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top with offset for fixed navbar height (80px)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    // Scroll down by 80px to account for fixed navbar
    window.scrollBy(0, -80);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
