const btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", () => {
  const menu = document.getElementById("main-nav");
  const height = menu.scrollHeight;
  if (menu.classList.contains("ocultar")) {
    menu.classList.remove("ocultar");
    menu.style.height = height + "px";
  } else {
    menu.classList.add("ocultar");
    menu.removeAttribute("style");
  }
});
