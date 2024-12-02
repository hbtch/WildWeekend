document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".popular-camps__list");
    const btnNext = document.querySelector(".slider-button");

    btnNext.addEventListener("click", () => {
        const firstCard = list.firstElementChild;
        list.appendChild(firstCard);
        list.style.transition = "none"; 
        void list.offsetWidth; 
        list.style.transition = "transform 0.3s ease-in-out"; 
    });
    });

document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".popular-parking__list");
    const btnNext = document.querySelector(".slider-button-next");

    btnNext.addEventListener("click", () => {
        const firstCard = list.firstElementChild;
        list.appendChild(firstCard);
        list.style.transition = "none"; 
        void list.offsetWidth; 
        list.style.transition = "transform 0.3s ease-in-out"; 
    });
});