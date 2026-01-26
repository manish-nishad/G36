import { useEffect, useRef } from "react";

export default function useEmblaAutoplay(emblaApi, delay = 3000) {
  const timer = useRef(null);

  useEffect(() => {
    if (!emblaApi) return;

    const play = () => {
      timer.current = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }, delay);
    };

    const stop = () => clearInterval(timer.current);

    emblaApi.on("pointerDown", stop);
    emblaApi.on("pointerUp", play);

    play();
    return () => stop();
  }, [emblaApi, delay]);

  return {
    onMouseEnter: () => clearInterval(timer.current),
    onMouseLeave: () => {
      if (!emblaApi) return;
      timer.current = setInterval(() => emblaApi.scrollNext(), delay);
    },
  };
}
