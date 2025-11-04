import React from "react";
import AosContext from "./AosContext";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const AosProvider = ({ children }) => {


  useEffect(() => {
    AOS.init({
     
      once: false, // animate every time it's visible
      mirror: true, // animate when scrolling up
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // refresh animations on route change
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
