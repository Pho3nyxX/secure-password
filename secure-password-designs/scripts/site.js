document.addEventListener("DOMContentLoaded", (event) => {
    // load links-container div
    const linksContainer = document.querySelector(".links-container");

    // set click listener on links-container
    // show sub-menu div 
    linksContainer.addEventListener("click", (e) => {
        let menuItem = e.target.closest('li');
        if (menuItem.classList.contains("menu-item")) {
            e.preventDefault();
            menuItem.classList.toggle("active");
        }
    });
});
