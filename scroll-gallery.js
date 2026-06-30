// Находим все карточки галереи
const galleryItems = document.querySelectorAll('.gallery-item');

// Создаём наблюдатель (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        // Если элемент виден на экране
        if (entry.isIntersecting) {
            // Добавляем класс 'show' с задержкой, чтобы карточки появлялись по очереди
            const delay = index * 150; // 150ms задержки между карточками
            setTimeout(() => {
                entry.target.classList.add('show');
            }, delay);
        }
    });
}, {
    threshold: 0.2 // Срабатывает, когда 20% элемента видно
});

// Начинаем следить за каждой карточкой
galleryItems.forEach((item) => {
    observer.observe(item);
});
