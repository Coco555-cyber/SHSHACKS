let themeSelect = document.getElementById("theme");
let themeStyleSheet = document.getElementById("themeStyleSheet");

themeSelect.addEventListener("change", function() {
  console.log(this.value);
  themeStyleSheet.setAttribute("href", "css/" + this.value + ".css");
});