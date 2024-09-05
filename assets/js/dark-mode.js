// Função para alternar o tema
function toggleTheme() {
    const isChecked = document.getElementById('themeSwitcher').checked;
    if (isChecked) {
        // Mudar para modo escuro
        document.documentElement.style.setProperty('--light-bg', '#28292c');
        document.documentElement.style.setProperty('--dark-bg', '#fff');
        document.documentElement.style.setProperty('--light-text', '#fff');
        document.documentElement.style.setProperty('--dark-text', '#000');
    } else {
        // Mudar para modo claro
        document.documentElement.style.setProperty('--light-bg', '#fff');
        document.documentElement.style.setProperty('--dark-bg', '#28292c');
        document.documentElement.style.setProperty('--light-text', '#000');
        document.documentElement.style.setProperty('--dark-text', '#fff');
    }
}

// Adicionar um listener ao toggle-switch
document.getElementById('themeSwitcher').addEventListener('change', toggleTheme);

// Verificar o estado inicial do toggle-switch
document.addEventListener('DOMContentLoaded', function() {
    const isChecked = document.getElementById('themeSwitcher').checked;
    toggleTheme(); // Aplica o tema correto na inicialização
});
