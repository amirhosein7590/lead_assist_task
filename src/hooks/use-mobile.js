import * as React from "react";
const MOBILE_BREAKPOINT = 992;
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
    window.addEventListener("load", () => {
      window.addEventListener("resize", () => {
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      });
    });
  }, []);
  return isMobile;
}
