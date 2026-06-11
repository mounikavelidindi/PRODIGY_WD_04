// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));  
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle
const toggleBtn = document.querySelector('#darkModeBtn');
toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Page load ayyaka saved theme apply cheyadam
window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
};

// Contact form basic validation
const form = document.querySelector('#contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  
  if (name === "" || email === "") {
    alert("⚠️ Name and Email fields are required!");
    return;
  }
  alert("✅ Message sent successfully! I'll get back to you soon.");
  form.reset();
});

// Scroll ayyinappudu navbar shadow effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
