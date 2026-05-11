document.addEventListener("DOMContentLoaded", () => {
    fetch("../data/cpp_data.xml")
        .then(response => response.text())
        .then(xmlText => {
            const xml = new DOMParser().parseFromString(xmlText, "text/xml");
            const courses = xml.getElementsByTagName("Course");
            const container = document.getElementById("cpp-courses");

            Array.from(courses).forEach((course, index) => {
                const title = course.getElementsByTagName("title")[0].textContent.trim();
                const description = course.getElementsByTagName("description")[0].textContent.trim();
                const updated = course.getElementsByTagName("updated")[0].textContent.trim();
                const link = course.getElementsByTagName("link")[0].textContent.trim();
                const image = course.getElementsByTagName("image")[0]?.textContent.trim() || "../images/bg.jpg";

                const card = document.createElement("div");
                card.className = "col";

                card.innerHTML = `
                    <div class="card h-100 bg-dark text-white card-small">
                        <img src="${image}" class="card-img-top" alt="${title}">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <small class="text-muted">${updated}</small>
                            <a href="${link}" target="_blank" class="btn btn-primary">Смотреть лекции</a>
                        </div>
                    </div>
                `;

                // ⬇⬇⬇ Плавное последовательное появление
                setTimeout(() => {
                    card.querySelector(".card").classList.add("fade-in");
                }, index * 150);

                container.appendChild(card);
            });
        })
        .catch(err => console.error("Ошибка загрузки XML:", err));
});
