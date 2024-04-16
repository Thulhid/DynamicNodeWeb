const mainImg = document.querySelector(".img0");
const img = document.querySelectorAll(".el");
const border = document.querySelectorAll(".border");
const selectColor = document.querySelectorAll(".select-color");
const stock = document.querySelector(".stock");
console.log(stock);

for (let i = 0; i < img.length; i++) {
  img[i].classList.remove("border");

  img[i].addEventListener("mouseover", function () {
    mainImg.src = img[i].src;
    img[i].classList.add("border");
  });
  img[i].addEventListener("mouseout", function () {
    img[i].classList.remove("border");
  });
}

for (let i = 0; i < selectColor.length; i++) {
  selectColor[i].classList.remove("select-color");
  selectColor[i].addEventListener("click", function (e) {
    stock.classList.remove("in-stock");
    stock.classList.remove("out-stock");
    // Remove "select-color" class from all elements
    for (let j = 0; j < selectColor.length; j++) {
      selectColor[j].classList.remove("select-color");
    }
    // Add "select-color" class to the clicked element
    selectColor[i].classList.add("select-color");

    const index = Array.from(selectColor).indexOf(this); //this = e.target
    console.log("Clicked item index:", index);
    if (index === 0) {
      stock.textContent = "In Stock";
      stock.classList.add("in-stock");
    } else if (index === 1) {
      stock.textContent = "In Stock";
      stock.classList.add("in-stock");
    } else if (index === 2) {
      stock.textContent = "In Stock";
      stock.classList.add("in-stock");
    } else if (index === 3) {
      stock.textContent = "Out of Stock";
      stock.classList.add("out-stock");
    } else if (index === 4) {
      stock.textContent = "In Stock";
      stock.classList.add("in-stock");
    } else if (index === 5) {
      stock.textContent = "Out of Stock";
      stock.classList.add("out-stock");
    }
  });
}
