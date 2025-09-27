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


  const filterButtons = document.querySelectorAll(".data-filter");
  const cards = document.querySelectorAll(".card-projeto");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      cards.forEach((card) => {
        if (filter === "todos" || card.classList.contains(filter)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });

      // destacar botão ativo
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });


  filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    cards.forEach((card) => {
      if (filter === "todos" || card.classList.contains(filter)) {
        // mostra
        card.classList.remove("hidden", "hiding");
      } else {
        // inicia animação de saída
        card.classList.add("hiding");
        // depois de 400ms (tempo da transição), aplica hidden
        setTimeout(() => {
          if (card.classList.contains("hiding")) {
            card.classList.add("hidden");
          }
        }, 400);
      }
    });

    // destacar botão ativo
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
