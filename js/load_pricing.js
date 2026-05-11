document.addEventListener("DOMContentLoaded", () => {
    fetch("../data/pricing_data.xml")
        .then(response => response.text())
        .then(xmlText => {
            const xml = new DOMParser().parseFromString(xmlText, "text/xml");
            const plans = xml.getElementsByTagName("Plan");
            const container = document.getElementById("pricing-cards");

            Array.from(plans).forEach((plan, index) => {
                const title = plan.getElementsByTagName("title")[0].textContent.trim();
                const price = plan.getElementsByTagName("price")[0].textContent.trim();
                const image = plan.getElementsByTagName("image")[0].textContent.trim();
                const buttonLink = plan.getElementsByTagName("buttonLink")[0].textContent.trim();
                const buttonText = plan.getElementsByTagName("buttonText")[0].textContent.trim();

                const features = Array.from(plan.getElementsByTagName("Feature"))
                    .map(f => `<li class="list-group-item">${f.textContent.trim()}</li>`)
                    .join("");

                const card = document.createElement("article");
                card.className = "col-12 col-md-6 col-lg-5";

                card.innerHTML = `
                    <div class="card card-big h-100">
                        <img src="${image}" class="card-img-top" alt="${title} plan image">

                        <div class="card-body">
                            <h2 class="card-title">${title}</h2>
                            <p class="card-text">${price}</p>
                        </div>

                        <ul class="list-group list-group-flush">
                            ${features}
                        </ul>

                        <div class="card-body">
                            <a href="${buttonLink}" class="btn btn-primary">${buttonText}</a>
                        </div>
                    </div>
                `;

                const btn = card.querySelector(".btn-primary");
                btn.addEventListener("click", () => {
                    showTopMessage();
                });


                // Плавное последовательное появление
                setTimeout(() => {
                    card.querySelector(".card-big").classList.add("fade-in");
                }, index * 150);

                container.appendChild(card);
            });
        });
});
