let themeSelect = document.getElementById("theme");
let themeStylesheet = document.getElementById("themeStylesheet");

themeSelect.addEventListener("change", function() {
  themeStylesheet.setAttribute("href", "css/" + this.value + ".css")
});

console.log("a");