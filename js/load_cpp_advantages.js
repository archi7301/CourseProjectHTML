document.addEventListener("DOMContentLoaded", () => {
    fetch("../data/cpp_advantages.xml")
        .then(r => r.text())
        .then(xmlText => {
            const xml = new DOMParser().parseFromString(xmlText, "text/xml");
            const modules = xml.getElementsByTagName("Module");
            const container = document.getElementById("cpp-advantages");

            Array.from(modules).forEach((mod, index) => {
                const title = mod.getElementsByTagName("title")[0].textContent.trim();
                const text = mod.getElementsByTagName("text")[0].textContent.trim();

                const card = document.createElement("article");
                card.className = "col-10 col-sm-6 col-md-4 col-lg-3";

                card.innerHTML = `
                    <div class="card h-100 bg-dark text-white text-center p-3 cpp-card">
                        <div class="card-body">
                            <h2 class="card-title h5">${title}</h2>
                            <p class="card-text">${text}</p>
                        </div>
                    </div>
                `;

                // Плавное появление
                setTimeout(() => {
                    card.querySelector(".cpp-card").classList.add("fade-in");
                }, index * 150);

                container.appendChild(card);
            });
        });
});
