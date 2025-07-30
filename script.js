 function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((sec) => {
    if (sec.id === id) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });
}


const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.src = "assets/night-mode.png";
    toggleButton.style.width = "25px"; 
    toggleButton.style.height = "25px";
     // ícone da lua
  } else {
    toggleButton.src = "assets/light.png"; // ícone do sol
  }
});
