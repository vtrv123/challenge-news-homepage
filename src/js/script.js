header = document.querySelector(".page-header");
openIcon = document.querySelector(".open-menu-icon");
closeIcon = document.querySelector(".close-menu-icon");
body = document.querySelector("body");

console.log(header.classList);

openIcon.addEventListener("click", function (e) {
  header.classList.add("nav-open");
  body.style.overflow = "hidden";
});

closeIcon.addEventListener("click", function (e) {
  header.classList.remove("nav-open");
  body.style.overflow = "visible";
});
