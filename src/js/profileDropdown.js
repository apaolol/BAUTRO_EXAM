// Opens or closes the profile dropdown when its button is clicked.
function toggleProfileMenu(event) {
    event.stopPropagation();

    const dropdown = document.getElementById("profileDropdown");
    dropdown.classList.toggle("show");
}

// Closes the dropdown when the user clicks outside the profile menu.
document.addEventListener("click", function (event) {
    const profileMenu = document.querySelector(".profile-menu");
    const dropdown = document.getElementById("profileDropdown");

    if (profileMenu && dropdown && !profileMenu.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});