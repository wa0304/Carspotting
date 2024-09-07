{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Event listener for form submission\
document.getElementById('upload-form').addEventListener('submit', function (event) \{\
    event.preventDefault(); // Prevents the form from submitting in the traditional way\
\
    const fileInput = document.getElementById('car-image');\
    const descriptionInput = document.getElementById('car-description');\
    const galleryGrid = document.querySelector('.gallery-grid');\
\
    // Get the file and description\
    const file = fileInput.files[0];\
    const description = descriptionInput.value;\
\
    if (file && description) \{\
        const reader = new FileReader();\
\
        // Display the image in the gallery after it is read\
        reader.onload = function (e) \{\
            const imgElement = document.createElement('img');\
            imgElement.src = e.target.result; // Base64 representation of the image\
            imgElement.alt = description;\
\
            const container = document.createElement('div');\
            container.appendChild(imgElement);\
            galleryGrid.appendChild(container);\
        \};\
\
        reader.readAsDataURL(file); // Reads the file as a data URL\
\
        // Clear form inputs\
        fileInput.value = '';\
        descriptionInput.value = '';\
    \}\
\});\
}