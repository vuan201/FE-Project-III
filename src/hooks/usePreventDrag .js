import { useEffect } from "react";

const usePreventDrag = () => {
  useEffect(() => {

    const handleDragend = (event, link) => {
      console.log("nghe dragend");
      event.preventDefault();
      // link.addEventListener('click', (e)=> e.preventDefault())
    };

    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("drag",(e, link) => handleDragend(e, link));
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("drag", handleDragend);
      });
    };
  },[]);
};

export default usePreventDrag;
