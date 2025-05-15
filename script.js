// script.js
document.getElementById('travelForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const preferences = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    destination: document.getElementById('destination').value,
    budget: document.getElementById('budget').value,
    travelDate: document.getElementById('travelDate').value
  };

  // Save to localStorage
  localStorage.setItem('travelPreferences', JSON.stringify(preferences));

  // Redirect to trip list page
  window.location.href = 'trip.html'; // We'll create this page next
});
