import { useCallback, useEffect, useState } from "react";
import testPdf from "../lib/test_pdf";

const useTest = (props) => {
  const { target, printTarget } = props;
  const [data, setData] = useState();
  const [isPrintState, setIsPrintState] = useState(false);

  const printSaveViewFunc = useCallback(
    (data) => {
      if (data === "save" || data === "view") {
        setIsPrintState(false);
        setData(data);
        testPdf(data, target.current, isPrintState, printTarget.current);
      }
      if (data === "print") {
        setIsPrintState(true);
        setData(data);
        testPdf(data, target.current, isPrintState, printTarget.current);
      }
    },
    [isPrintState, printTarget, target]
  );

  useEffect(() => {
    if (!target.current || !printTarget.current) return;
    printSaveViewFunc(data);
  }, [data, printSaveViewFunc, printTarget, target]);

  return { printSaveViewFunc, isPrintState };
};

export default useTest;
