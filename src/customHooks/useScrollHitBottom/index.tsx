import { useEffect } from "react";

const useScrollHitBottom = (ref = null, callback) => {
  let touchStartY = 0;

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;

    if (scrollHeight === clientHeight && scrollTop === 0) {
      const { deltaY, targetTouches } = e;
      let scrollPosition = deltaY;
      if (deltaY === undefined && targetTouches) {
        scrollPosition = touchStartY - targetTouches?.[0].clientY;
      }
      if (scrollPosition > 0) {
        callback(e);
      }
    } else if (scrollHeight === scrollTop + clientHeight) {
      callback(e);
    }
  };

  const handleTouchStart = (e) => {
    const { targetTouches } = e;
    touchStartY = targetTouches?.[0].clientY;
  };

  useEffect(() => {
    const eventTarget = ref || document.getElementById("scroll_container");

    eventTarget?.addEventListener("scroll", handleScroll);
    eventTarget?.addEventListener("wheel", handleScroll, { passive: false });
    eventTarget?.addEventListener("touchmove", handleScroll, {
      passive: false,
    });
    eventTarget?.addEventListener("touchstart", handleTouchStart);
    return () => {
      eventTarget?.removeEventListener("scroll", handleScroll);
      eventTarget?.removeEventListener("wheel", handleScroll);
      eventTarget?.removeEventListener("touchmove", handleScroll);
      eventTarget?.removeEventListener("touchstart", handleTouchStart);
    };
  });
};

export default useScrollHitBottom;
