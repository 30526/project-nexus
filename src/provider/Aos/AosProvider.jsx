import React from "react";
import AosContext from "./AosContext";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 10000,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  const refreshAos = () => {
    AOS.refresh();
  };

  return (
    <div>
      <AosContext value={refreshAos}>{children}</AosContext>
    </div>
  );
};

export default AosProvider;
