// ================= MOBILE MENU =================

function toggleMenu() {
    const nav = document.querySelector("nav");

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "75px";
        nav.style.right = "6%";
        nav.style.background = "#ffffff";
        nav.style.padding = "25px";
        nav.style.borderRadius = "15px";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
        nav.style.zIndex = "100";
    }
}


// ================= MENU FILTER =================

function filterMenu(category, button) {

    const cards = document.querySelectorAll(".menu-card");
    const buttons = document.querySelectorAll(".filter-buttons button");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    cards.forEach(card => {

        if (category === "all" || card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}