// variables
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDown = document.querySelector(".dropDown");

// Abrir /Cerrar menu
toggleBtn.onclick = () => {
    dropDown.classList.toggle("open");
    const isOpen = dropDown.classList.contains("open");

    toggleBtnIcon.classList = isOpen
    ? "ri-bar-chart-horizontal-line"
    : "ri-close-fill"

}