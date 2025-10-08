// login page
function switchTab(tab) {
  // Update tab buttons
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach((t) => t.classList.remove("active"));
  event.target.classList.add("active");

  // Update form content
  const contents = document.querySelectorAll(".form-content");
  contents.forEach((c) => c.classList.remove("active"));
  document.getElementById(tab).classList.add("active");
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Simulasi login
  alert(`Login berhasil!\nEmail: ${email}`);

  window.location.href = "index.html";
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const phone = document.getElementById("register-phone").value;
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById(
    "register-confirm-password"
  ).value;

  // Validasi password
  if (password !== confirmPassword) {
    alert("Kata sandi tidak cocok!");
    return;
  }

  // Simulasi registrasi
  alert(
    `Registrasi berhasil!\nNama: ${name}\nEmail: ${email}\nTelepon: ${phone}`
  );

  window.location.href = "login.html";
}
