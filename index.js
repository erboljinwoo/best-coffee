const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      themeToggle.textContent = document.body.classList.contains('dark-theme')
        ? '☀️ '
        : '🌙 ';
    });

    // Фильтрация меню
    function filterMenu(type) {
      const cards = document.querySelectorAll('.menu-card');
      cards.forEach(card => {
        if (type === 'all') {
          card.style.display = 'block';
        } else {
          card.style.display = card.classList.contains(type) ? 'block' : 'none';
        }
      });
    }

    // Кнопка \"Наверх\"
    const scrollTopBtn = document.getElementById('scroll-top');
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Обработка формы
    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Спасибо за сообщение! Мы свяжемся с вами.');
    });