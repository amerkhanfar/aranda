const day_2_btn = document.getElementById("day2");
const day_3_btn = document.getElementById("day3");
const title = document.getElementById("daytitle");
const info = document.getElementById("dayinfo");
day_2_btn.addEventListener("click", () => {
  let text = "Day 2";
  let infoText =
    "Breakfast at the hotel, enjoy a tour of Petra, both a Jordanian national treasure and a UNESCO world heritage, see the towering treasurey, then continue to visit the Wadi Rum desert and its magnificent moon-like landscape, take a short ride in a  4x4 vehicle";
  title.innerText = text;
  info.innerText = infoText;
});

day_3_btn.addEventListener("click", () => {
  let text = "Day 3";
  let infoText =
    "Breakfast at the camp. Then drive to the lowest point on Earth the Dead Sea for relaxation and rejuvenoation. After visit Dead Sea beach drive to Amman to take rest before departure. And finaly transfer to the airport. Assistance ith formalities by a member of our staff and departure.";
  title.innerText = text;
  info.innerText = infoText;
});
const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child",
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

/********* **********/

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(`.product-content`, {
  origin: "top",
  interval: 100,
});

sr.reveal(`.product-imgs`, {
  origin: "left",
  interval: 100,
});
