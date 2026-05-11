document.addEventListener("DOMContentLoaded", () => {
    // Определяем путь к header.html
    let headerPath;

    if (window.location.pathname.includes("/html/")) {
        headerPath = "../html/header.html";
    } else {
        headerPath = "html/header.html";
    }

    fetch(headerPath)
        .then(r => r.text())
        .then(html => {
            document.getElementById("header").innerHTML = html;

            // Автокоррекция путей
            const isInner = window.location.pathname.includes("/html/");

            document.querySelectorAll("#header .nav-link").forEach(link => {
                const href = link.getAttribute("href");

                if (isInner) {
                    link.setAttribute("href", "../" + href);
                }
            });
        })
        .catch(err => console.error("HEADER LOAD ERROR:", err));
});

