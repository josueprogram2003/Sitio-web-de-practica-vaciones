const btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", () => {
  const menu = document.getElementById("main-nav");
  const height = menu.scrollHeight;
  if (menu.classList.contains("desplegar")) {
    menu.classList.remove("desplegar");
    menu.removeAttribute("style");
  } else {
    menu.classList.add("desplegar");
    menu.style.height = height + "px";
  }
});
