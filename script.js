// Navbar toggle
const hamburgerButton = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
if (hamburgerButton && navMenu) {
  hamburgerButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburgerButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navMenu && navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          hamburgerButton && hamburgerButton.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });
});

// Year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}

// Helpers
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function setError(element, message) {
  const errorElem = element.parentElement.querySelector('.error');
  if (errorElem) errorElem.textContent = message || '';
}

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;
    if (!nameInput.value.trim()) { setError(nameInput, 'Please enter your name'); isValid = false; } else setError(nameInput, '');
    if (!isValidEmail(emailInput.value)) { setError(emailInput, 'Enter a valid email'); isValid = false; } else setError(emailInput, '');
    if (!messageInput.value.trim()) { setError(messageInput, 'Please enter a message'); isValid = false; } else setError(messageInput, '');

    if (isValid) {
      alert('Thanks! We\'ll get back to you soon.');
      contactForm.reset();
    }
  });
}

// Newsletter validation
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    const errorSmall = document.getElementById('newsletterError');
    if (!isValidEmail(emailInput.value)) {
      if (errorSmall) errorSmall.textContent = 'Please enter a valid email';
    } else {
      if (errorSmall) errorSmall.textContent = '';
      alert('Subscribed!');
      newsletterForm.reset();
    }
  });
}

// Login validation
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    let ok = true;
    if (!isValidEmail(emailInput.value)) { setError(emailInput, 'Enter a valid email'); ok = false; } else setError(emailInput, '');
    if (!passwordInput.value.trim()) { setError(passwordInput, 'Enter your password'); ok = false; } else setError(passwordInput, '');
    if (ok) {
      alert('Logged in (demo).');
      loginForm.reset();
    }
  });
}

// Signup validation
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('signupName');
    const emailInput = document.getElementById('signupEmail');
    const passInput = document.getElementById('signupPassword');
    const confirmInput = document.getElementById('signupConfirm');
    let ok = true;
    if (!nameInput.value.trim()) { setError(nameInput, 'Enter your full name'); ok = false; } else setError(nameInput, '');
    if (!isValidEmail(emailInput.value)) { setError(emailInput, 'Enter a valid email'); ok = false; } else setError(emailInput, '');
    if (passInput.value.length < 6) { setError(passInput, 'Min 6 characters'); ok = false; } else setError(passInput, '');
    if (confirmInput.value !== passInput.value) { setError(confirmInput, 'Passwords do not match'); ok = false; } else setError(confirmInput, '');
    if (ok) {
      alert('Account created (demo).');
      signupForm.reset();
    }
  });
}