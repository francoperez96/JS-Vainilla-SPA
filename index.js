document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");

    const fakeAPI = {
        home: {
            title: "Bienvenido a mi SPA",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod nunc ut felis pretium, vel scelerisque lacus efficitur."
        },
        about: {
            title: "Acerca de nosotros",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod nunc ut felis pretium, vel scelerisque lacus efficitur."
        },
        contact: {
            title: "Contáctanos",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod nunc ut felis pretium, vel scelerisque lacus efficitur."
        }
    };

    function showPage() {
        const hash = window.location.hash;
        const pageId = hash ? hash.slice(1) : "home"; 
        const pageData = fakeAPI[pageId];

        if (pageData) {
            document.title = pageData.title;
            pages.forEach(page => {
                if (page.id === pageId) {
                    page.style.display = "block";
                    page.innerHTML = `<h1>${pageData.title}</h1><p>${pageData.content}</p>`;
                } else {
                    page.style.display = "none";
                }
            });
        } else {
            document.title = "Página no encontrada";
            pages.forEach(page => {
                page.style.display = "none";
            });
            const content = document.getElementById("content");
            content.innerHTML = "<h1>Página no encontrada</h1>";
        }
    }

    window.addEventListener("hashchange", showPage);

    showPage();
});
