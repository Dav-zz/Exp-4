 // Get the main image
const mainImage = document.getElementById("mainImage");

// Get all thumbnails
const thumbnails = document.querySelectorAll(".thumbnails img");

// Add click events
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    // Change main image source
    mainImage.src = thumbnail.src;

    // Remove "active" class from all thumbnails
    thumbnails.forEach(img => img.classList.remove("active"));

    // Add "active" class to clicked thumbnail
    thumbnail.classList.add("active");
  });
});
