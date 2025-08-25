// Get the main image
const mainImage = document.getElementById("mainImage");

// Get all thumbnails
const thumbnails = document.querySelectorAll(".thumbnails img");

// Add click events
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    const newSrc = thumbnail.src;

    // Create a temporary image to preload
    const tempImg = new Image();
    tempImg.src = newSrc;

    // Once loaded, swap the main image
    tempImg.onload = () => {
      mainImage.src = newSrc;

      // Restart animation cleanly
      mainImage.classList.remove("animate");
      void mainImage.offsetWidth; // force reflow
      mainImage.classList.add("animate");

      // Highlight the selected thumbnail
      thumbnails.forEach(img => img.classList.remove("active"));
      thumbnail.classList.add("active");
    };
  });
});

