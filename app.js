const menu = document.querySelector(".menu");

const mobile_menu = document.querySelector(".header .navbar .nav-list ul");

const menu_item = document.querySelectorAll(".header .nav-list ul li a");

const header = document.querySelector(".header .container");

menu.addEventListener("click", function () {
  menu.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

menu_item.forEach((i) => {
  i.addEventListener("click", function () {
    menu.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
