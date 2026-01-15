import { useEffect, useState } from "react";

export default function useCountUp(end, startCounting, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startCounting) return; // ⛔ wait until visible

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, startCounting]);

  return value;
}
