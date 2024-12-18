function showsidebar() {
    const sidebar = document.querySelector('.mobile-view');
    sidebar.style.display = "flex"
}
function hidesidebar()  {
    const sidebar = document.querySelector('.mobile-view');
    sidebar.style.display = "none"
}


// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
  
    // Toggle dark-mode class
    body.classList.toggle('dark-mode');
  
    // Save the preference to localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }
  
  // Load the saved theme on page load
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  });
  