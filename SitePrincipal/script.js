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
