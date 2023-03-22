const flowers = document.querySelectorAll(".flower");

flowers.forEach((flower) => {
  flower.addEventListener("mouseover", () => {
    flower.classList.add("hover");
  });
  
  flower.addEventListener("mouseout", () => {
    flower.classList.remove("hover");
  });
});
