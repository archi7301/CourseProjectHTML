document.addEventListener("DOMContentLoaded", () => {
    fetch("data/home_data.xml")
        .then(response => response.text())
        .then(xmlText => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(xmlText, "text/xml");

            const courses = xml.getElementsByTagName("Course");
            const container = document.getElementById("home-courses");

            Array.from(courses).forEach((course, index) => {
                const title = course.getElementsByTagName("title")[0].textContent.trim();
                const description = course.getElementsByTagName("description")[0].textContent.trim();
                const updated = course.getElementsByTagName("updated")[0].textContent.trim();
                const link = course.getElementsByTagName("link")[0].textContent.trim();
                const image = course.getElementsByTagName("image")[0].textContent.trim();

                const card = document.createElement("div");
                card.className = "col";

                card.innerHTML = `
                    <div class="card h-100 card-small bg-dark text-white">
                        <img src="${image}" class="card-img-top" alt="${title}">
                        <div class="card-body">
                            <h2 class="card-title h5">${title}</h2>
                            <p class="card-text">${description}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <small class="text-muted">${updated}</small>
                            <button class="btn btn-primary open-page" data-target="${link}">
                                Перейти к изучению
                            </button>
                        </div>
                    </div>
                `;

                // ⬇⬇⬇ Плавное последовательное появление
                setTimeout(() => {
                    card.querySelector(".card").classList.add("fade-in");
                }, index * 150);

                container.appendChild(card);
            });
        });
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("open-page")) {
        const target = e.target.getAttribute("data-target");
        window.location.href = target;
    }
});
