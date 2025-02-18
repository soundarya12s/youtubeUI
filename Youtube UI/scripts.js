const burgerIcon = document.getElementById('burger-icon');
const sidebar = document.getElementById('sidebar');

burgerIcon.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar-open');
    sidebar.classList.toggle('sidebar-closed');
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", function () {
        let searchTerm = document.getElementById("searchInput").value;
        console.log("Search term:", searchTerm);
    });
});


