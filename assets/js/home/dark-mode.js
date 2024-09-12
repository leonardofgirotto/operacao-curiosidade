const themeSwitcher = document.getElementById('themeSwitcher');
const body = document.body;

// Verifica se o tema foi salvo no localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeSwitcher.checked = true; // Deixa o toggle ativado
}

// Escuta mudanças no toggle
themeSwitcher.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); // Salva a escolha do tema escuro
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light'); // Salva a escolha do tema claro
    }
});
