import { useEffect, useRef, useState } from "react";

export const useNearIntersection = () => {
  const [isNear, setIsNear] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setIsNear(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "50px",
    });

    if (ref.current) observer.observe(ref.current);
  }, []);

  return {isNear, ref};
};
