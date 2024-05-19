import { useState } from "react";

export default function App() {
  const [withoutDebounce, setWithoutDebounce] = useState(0);
  const [debounce, setDebounce] = useState(0);
  const [withoutThrottle, setWithoutThrottle] = useState(0);
  const [throttle, setThrottle] = useState(0);
  const [timer, setTimer] = useState(null);
  const debouncePolyfill = (delay, cb) => {
    return function (...args) {
      console.log("timer", timer, args);
      if (timer) clearTimeout(timer);
      setTimer(
        setTimeout(() => {
          cb(...args);
        }, delay)
      );
    };
  };
  const debounceFunc = debouncePolyfill(1000, (args) => {
    console.log(args, "here args");
    setDebounce((prev) => prev + 1);
  });
  const handleDebounce = () => {
    setWithoutDebounce((prev) => prev + 1);
    debounceFunc("bhosdiacha");
  };

  const handleThrottle = () => {
    setWithoutThrottle((prev) => prev + 1);
  };
  return (
    <div className="App">
      <button onClick={handleDebounce}>Debounce</button>
      <button onClick={handleThrottle}>Throttle</button>
      <p>
        {withoutDebounce} {debounce}
      </p>
      <p>
        {withoutThrottle} {throttle}
      </p>
    </div>
  );
}
