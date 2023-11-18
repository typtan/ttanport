const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
});

const savedDarkMode = localStorage.getItem('dark-mode');

if (savedDarkMode) {
    body.classList.toggle('dark-mode', savedDarkMode === 'true');
}
