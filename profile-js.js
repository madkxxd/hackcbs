// script.js

document.addEventListener("DOMContentLoaded", function() {
    const editProfileBtn = document.getElementById("edit-profile-btn");
    const fileInput = document.getElementById("file-input");
    const profilePic = document.getElementById("profile-pic");

    // Event listener for the "Edit Profile" button
    if (editProfileBtn) {
        editProfileBtn.addEventListener("click", function() {
            alert("Edit Profile functionality is not implemented yet.");
            // Here you can redirect to an edit profile page or open a modal for editing
            // window.location.href = "edit-profile.html"; // Example of redirecting
        });
    }

    // Handle image upload
    fileInput.addEventListener("change", function(event) {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            const reader = new FileReader(); // Create a FileReader object
            reader.onload = function(e) {
                profilePic.src = e.target.result; // Set the image source to the uploaded file
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    });
});