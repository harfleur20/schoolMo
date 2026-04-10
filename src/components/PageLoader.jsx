import { useEffect, useState } from "react";
import logo from "../../Assets/icon.png";

export function PageLoader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHiding(true), 1200);
    const timer2 = setTimeout(() => setGone(true), 1700);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`page-loader${hiding ? " page-loader--hiding" : ""}`}>
      <div className="page-loader-inner">
        <span className="page-loader-ring page-loader-ring--1" />
        <span className="page-loader-ring page-loader-ring--2" />
        <span className="page-loader-ring page-loader-ring--3" />
        <img src={logo} alt="SchoolMo" className="page-loader-logo" />
      </div>
    </div>
  );
}
