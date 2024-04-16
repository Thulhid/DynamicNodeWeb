"use strict";

const card = document.querySelectorAll(".card");
const productName = document.querySelectorAll(".product-name");
const overviewLink = document.querySelectorAll(".overview-link");

for (let i = 0; i < card.length; i++) {
  card[i].classList.remove("bold");
  card[i].classList.remove("shadow");

  console.log(card[i]);
  overviewLink[i].addEventListener("mouseenter", function () {
    card[i].style.justifySelf = "center";
    card[i].classList.add("bold");
    card[i].classList.add("shadow");
  });
  overviewLink[i].addEventListener("mouseout", function () {
    card[i].style.border = "none";
    card[i].style.justifySelf = "stretch";
    card[i].classList.remove("bold");
    card[i].classList.remove("shadow");
  });
}
