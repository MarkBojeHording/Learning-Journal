function updateDate() {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('current-date').textContent = today.toLocaleDateString('en-US', options);
}

document.addEventListener("DOMContentLoaded", updateDate);
