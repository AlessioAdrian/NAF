function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        sessionStorage.setItem('authenticated', 'true');
        window.location.href = 'NSF.html';
        return false;
    } else {
        alert('Usuário ou senha incorretos!');
        return false;
    }
}
