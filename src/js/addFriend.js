// Toggles between sending and canceling a friend request.
const addFriend = () => {
    const button = document.getElementById("friendButton");
    const status = document.getElementById("friendStatus");

    // Change the button and display a confirmation when sending a request.
    if (button.textContent === "Add Friend") {
        button.textContent = "Cancel Request";
        status.textContent = "✓ Friend request sent";
        status.style.color = "green";
    } else {
        // Reset the button and remove the confirmation when canceling.
        button.textContent = "Add Friend";
        status.textContent = "";
    }
};
