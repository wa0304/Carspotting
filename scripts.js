// Event listener for form submission
document.getElementById('upload-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    const fileInput = document.getElementById('car-image');
    const descriptionInput = document.getElementById('car-description');
    const galleryGrid = document.querySelector('.gallery-grid');

    // Get the file and description
    const file = fileInput.files[0];
    const description = descriptionInput.value;

    if (file && description) {
        const reader = new FileReader();

        // Display the image in the gallery after it is read
        reader.onload = function (e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result; // Base64 representation of the image
            imgElement.alt = description;

            const container = document.createElement('div');
            container.appendChild(imgElement);
            galleryGrid.appendChild(container);
        };

        reader.readAsDataURL(file); // Reads the file as a data URL

        // Clear form inputs
        fileInput.value = '';
        descriptionInput.value = '';
    }
});
