





document.addEventListener("DOMContentLoaded", function () {
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const categoryWrapper = document.querySelector(".category-wrapper");

    leftBtn.addEventListener("click", () => {
        categoryWrapper.scrollBy({ left: -150, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
        categoryWrapper.scrollBy({ left: 150, behavior: "smooth" });
    });
});


// carousel


document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.review-card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    const cardsToShow = window.innerWidth < 768 ? 1 : 
                       window.innerWidth < 1024 ? 2 : 4;
    const totalSlides = Math.ceil(cards.length / cardsToShow);
    
    // Initialize dots
    updateDots(0);
    
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 20; // Width + gap
        carousel.style.transform = `translateX(-${currentIndex * cardWidth * cardsToShow}px)`;
        updateDots(currentIndex);
    }
    
    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateCarousel();
        } else {
            currentIndex = 0;
            updateCarousel();
        }
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        } else {
            currentIndex = totalSlides - 1;
            updateCarousel();
        }
    });
    
    dots.forEach((dot, i) => {
        dot.addEventListener('click', function() {
            currentIndex = i;
            updateCarousel();
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const newCardsToShow = window.innerWidth < 768 ? 1 : 
                              window.innerWidth < 1024 ? 2 : 4;
        if (newCardsToShow !== cardsToShow) {
            location.reload();
        }
    });
    
    // Auto slide every 5 seconds
    setInterval(function() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }, 5000);
});