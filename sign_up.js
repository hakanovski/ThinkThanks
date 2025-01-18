document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Şifre doğrulama
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        alert('Password must be at least 8 characters long, include a number, and an uppercase letter.');
        return;
    }

    alert(`Account created successfully for ${username}`);
    // Burada API entegrasyonu yapılabilir
});
