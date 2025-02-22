// Модальное окно
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

document.getElementById('download-client')?.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn?.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Переключение между логином и регистрацией
document.getElementById('switch-to-register')?.addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('switch-to-login')?.addEventListener('click', () => {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Регистрация
document.getElementById('register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    if (!localStorage.getItem('regDate')) {
        localStorage.setItem('regDate', new Date().toLocaleDateString());
    }

    alert('Регистрация успешна! Теперь войдите.');
});

// Логин
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
        alert('Вход выполнен!');
        window.location.href = 'profile.html';
    } else {
        alert('Неверное имя пользователя или пароль.');
    }
});

// Профиль
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username') || 'Гость';
    const regDate = localStorage.getItem('regDate') || 'Неизвестно';

    document.getElementById('profile-username')?.textContent = username;
    document.getElementById('profile-reg-date')?.textContent = regDate;
    document.getElementById('profile-purchases')?.textContent = 'Игра на Python';
});

// Эффект градиента при движении мыши
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');

    if (title) title.style.backgroundImage = linear-gradient(${x * 360}deg, #ff00cc, #3333ff, #00ffcc);
    if (subtitle) subtitle.style.backgroundImage = linear-gradient(${y * 360}deg, #ff00cc, #3333ff, #00ffcc);
});