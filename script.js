function updateDate() {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('current-date').textContent = today.toLocaleDateString('en-US', options);
}

document.addEventListener("DOMContentLoaded", updateDate);

document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("extraContent");
  const viewMoreBtn = document.getElementById("viewMoreBtn");

  // Ensure content is hidden and "View More" is visible on reload
  content.style.display = "none";
  content.classList.remove("show");
  if (viewMoreBtn) {
      viewMoreBtn.style.display = "block"; // Ensure "View More" is visible
  }

  // Clear stored expansion state in localStorage
  localStorage.removeItem("viewMoreExpanded");
});

function toggleContent() {
  const content = document.getElementById("extraContent");
  const viewMoreBtn = document.getElementById("viewMoreBtn");

  if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      setTimeout(() => content.classList.add("show"), 10);
      if (viewMoreBtn) {
          viewMoreBtn.style.display = "none"; // Hide the button after clicking
      }
  }
}
