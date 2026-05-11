document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll(".big-tech-logo");

    logos.forEach((logo, index) => {
        setTimeout(() => {
            logo.classList.add("show");
        }, index * 100);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".center-logo");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                logo.classList.add("visible");
            } else {
                logo.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(logo);
});


function showTopMessage() {
    const alertBox = document.getElementById('top-notification');

    // Показываем сообщение
    alertBox.classList.add('visible');

    // Через 3 секунды убираем его обратно наверх
    setTimeout(() => {
        alertBox.classList.remove('visible');
    }, 2000);
}

document.querySelectorAll('.open-page').forEach(btn => {
    btn.addEventListener('click', () => {
        const url = btn.dataset.target;
        window.open(url, '_blank');
    });
});
