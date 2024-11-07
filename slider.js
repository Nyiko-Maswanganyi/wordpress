 let currentIndex = 0;

        function moveSlide(direction) {
            const slides = document.querySelector('.slides');
            const totalSlides = document.querySelectorAll('.slide').length;
            currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
            updateSlider();
        }

        function currentSlide(index) {
            currentIndex = index;
            updateSlider();
        }

        function updateSlider() {
            const slides = document.querySelector('.slides');
            const dots = document.querySelectorAll('.dot');
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            updateSlider();
        });
