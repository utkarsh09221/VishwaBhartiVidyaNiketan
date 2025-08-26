import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Disable browser scroll restoration to avoid conflicts
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTopNow = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Chrome/Firefox/Edge
    };

    // Attempt multiple times to cover mobile browsers' async layout
    scrollToTopNow();
    requestAnimationFrame(scrollToTopNow);
    setTimeout(scrollToTopNow, 0);
    setTimeout(scrollToTopNow, 120);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
