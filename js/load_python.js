document.addEventListener("DOMContentLoaded", () => {
    fetch("../data/python_data.xml")
        .then(response => response.text())
        .then(xmlText => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(xmlText, "text/xml");

            const sections = xml.getElementsByTagName("Section");
            const container = document.getElementById("python-videos");

            let index = 0; // общий индекс для всех видео

            Array.from(sections).forEach(section => {
                const title = section.getAttribute("title");
                const videos = section.getElementsByTagName("Video");

                // Заголовок ряда
                const h2 = document.createElement("h2");
                h2.className = "video-title";
                h2.textContent = title;
                container.appendChild(h2);

                // Видео-блоки
                Array.from(videos).forEach(video => {
                    const src = video.textContent.trim();

                    const col = document.createElement("div");
                    col.className = "col-12 col-md-6 col-lg-4";

                    col.innerHTML = `
                        <div class="video-wrapper video-animated">
                            <video controls>
                                <source src="${src}" type="video/mp4">
                            </video>
                        </div>
                    `;

                    // Плавное последовательное появление
                    setTimeout(() => {
                        col.querySelector(".video-animated").classList.add("fade-in");
                    }, index * 150);

                    index++;
                    container.appendChild(col);
                });
            });
        });
});
