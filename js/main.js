let subMenu = document.querySelector(".sub_menu");
window.addEventListener("click", (e) => {
  if(e.target.closest(".toggle")){
    subMenu.style.display = "Flex"
  } else {
    subMenu.style.display = "none";
  }
});