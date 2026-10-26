document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const googleBtn = document.querySelector('.google-btn');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
      alert(`Signing in with: ${email}`);
    }
  });
  googleBtn.addEventListener('click', () => {
    alert('Google authentication initiated...');
  });
});
