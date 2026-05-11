document.addEventListener("DOMContentLoaded", () => {
    fetch("data/home_advantages.xml")
        .then(r => r.text())
        .then(xmlText => {
            const xml = new DOMParser().parseFromString(xmlText, "text/xml");
            const items = xml.getElementsByTagName("Advantage");
            const container = document.getElementById("advantages");

            Array.from(items).forEach((item, index) => {
                const title = item.getElementsByTagName("title")[0].textContent.trim();
                const text = item.getElementsByTagName("text")[0].textContent.trim();
                const paths = Array.from(item.getElementsByTagName("icon")[0].getElementsByTagName("path"))
                    .map(p => `<path d="${p.getAttribute("d")}"></path>`)
                    .join("");

                const card = document.createElement("article");
                card.className = "col-10 col-sm-6 col-md-4 col-lg-3";

                card.innerHTML = `
                    <div class="card h-100 bg-dark text-white text-center p-3 advantage-card">
                        <div class="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="white" class="mb-3"
                                viewBox="0 0 16 16">
                                ${paths}
                            </svg>

                            <h2 class="card-title h5">${title}</h2>
                            <p class="card-text">${text}</p>
                        </div>
                    </div>
                `;

                // Плавное появление
                setTimeout(() => {
                    card.querySelector(".card").classList.add("fade-in");
                }, index * 150);

                container.appendChild(card);
            });
        });
});
