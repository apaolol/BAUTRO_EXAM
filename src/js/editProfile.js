// Prompts the user to edit each profile field using its current value.
const editProfile = () => {
    document.getElementById("name").textContent =
        prompt("Name:", document.getElementById("name").textContent);

    document.getElementById("username").textContent =
        prompt("Username:", document.getElementById("username").textContent);

    document.getElementById("bio").textContent =
        prompt("Bio:", document.getElementById("bio").textContent);

    document.getElementById("about").textContent =
        prompt("About Me:", document.getElementById("about").textContent);

    document.getElementById("interests").textContent =
        prompt("Interests:", document.getElementById("interests").textContent);
};

// Displays a placeholder error instead of saving the changes.
const saveChanges = () => {
    alert("ERROR 404: You don't have access. Send 500 to 09560635269 to save changes.");
};