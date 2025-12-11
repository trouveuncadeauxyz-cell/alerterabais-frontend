document.addEventListener('DOMContentLoaded', function() {
    var headerRight = document.querySelector('.header-right');
    if (headerRight) {
        var loginBtn = document.createElement('a');
        loginBtn.href = 'login.html';
        loginBtn.className = 'btn-connexion';
        loginBtn.textContent = 'Connexion';
        loginBtn.style.padding = '8px 16px';
        loginBtn.style.background = 'linear-gradient(135deg, #06b6d4, #0891b2)';
        loginBtn.style.color = 'white';
        loginBtn.style.borderRadius = '8px';
        loginBtn.style.fontSize = '0.9rem';
        loginBtn.style.fontWeight = '600';
        loginBtn.style.textDecoration = 'none';
        loginBtn.style.marginLeft = '8px';
        headerRight.appendChild(loginBtn);
    }
});
