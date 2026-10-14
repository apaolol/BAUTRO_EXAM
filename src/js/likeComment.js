// Updates the like count and button state for the selected post.
const likePost = (button) => {
    const likes = button.nextElementSibling;
    let count = Number(likes.dataset.count);

    // Remove a like if already liked; otherwise, add one.
    if (button.dataset.liked === "true") {
        count--;
        button.dataset.liked = "false";
        button.textContent = "❤️ Like";
    } else {
        count++;
        button.dataset.liked = "true";
        button.textContent = "❤️ Liked";
    }

    // Update the stored count and the number displayed on the page.
    likes.dataset.count = count;
    likes.textContent = count + " likes";
};

// Displays a placeholder message because commenting is not implemented.
const commentPost = () => {
    alert("ERROR 404: Comments are not in your current plan. Send 500 to 09560635269 to access comments.");
};