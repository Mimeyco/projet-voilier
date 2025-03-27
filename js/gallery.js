document.addEventListener("DOMContentLoaded", async function () {
  const gallery = document.getElementById("gallery");
  const arrow = document.querySelectorAll(".up-arrow");
  const sentinel = document.createElement("div");
  sentinel.classList.add("sentinel");
  setTimeout(() => arrow[0].appendChild(sentinel), 3000);

  let images = [];
  let index = 0;
  const batchSize = 15;

  // Fonction pour récupérer les images depuis le serveur
  async function fetchImages() {
    try {
      const response = await fetch("../php/images.php");
      images = await response.json();

      loadNextBatch();
    } catch (error) {
      console.error("Erreur lors du chargement des images :", error);
    }
  }

  // Fonction pour charger 15 images à la fois
  function loadNextBatch() {
    if (index >= images.length) {
      observer.disconnect();
      return;
    }

    const nextImages = images.slice(index, index + batchSize);
    nextImages.forEach((imgData) => {
      const img = document.createElement("img");
      img.src = imgData.src;
      img.alt = imgData.alt;
      img.loading = "lazy"; // Optimisation du chargement
      gallery.appendChild(img);
    });

    index += batchSize;
  }

  // IntersectionObserver pour détecter quand le sentinel devient visible
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadNextBatch();
      }
    },
    { rootMargin: "100px" }
  );

  observer.observe(sentinel);
  fetchImages();
});
