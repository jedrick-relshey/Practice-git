window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
  
    document.getElementById("car").style.transform =
      `translateX(${scrollY * 0.5}px)`;
  });