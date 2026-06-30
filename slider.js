// Массив URL-адресов изображений – ВЫ ЗАМЕНЯЕТЕ НА СОХРАНЕННЫЕ ИХОБРАЖЕНИЯ В ПАПКЕ ПРОЕКТА img
const images = [
    'img/3335acbe9c3a8475e57bf381c8babbe2.jpg',
    'img/65537b3065906c9c2b143e6579c048bf.jpg',
    'img/ab698b344f0a8144802ed006036e529f.jpg',

];

// Находим элементы на странице
const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageCounter = document.getElementById('imageCounter');

// Текущий индекс изображения (начинаем с 0)
let currentIndex = 0;

// Функция обновления изображения
function updateImage(index) {
    sliderImage.src = images[index];
    imageCounter.textContent = `${index + 1} / ${images.length}`;
}

// Обработчики событий
nextBtn.addEventListener('click', function() {
    // Переход к следующему изображению (с зацикливанием)
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

prevBtn.addEventListener('click', function() {
    // Переход к предыдущему изображению (с зацикливанием)
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});

// Инициализация (показываем первое изображение)
updateImage(currentIndex);
