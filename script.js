let img = document.getElementById("perview");
let thumImg = document.querySelectorAll(".img");
thumImg.forEach((e) => {
  e.onclick = () => {
    img.src = e.src;
  };
});
