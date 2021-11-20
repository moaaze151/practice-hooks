import { useState } from "react";

export default function useInc() {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum((num) => num + 1);
  };
  const decNum = () => {
    setNum((num) => num - 1);
  };
  return { num, incNum, decNum };
}
