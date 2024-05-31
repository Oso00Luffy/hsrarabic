// src/js/background.js

fetch('/manifest.json')
  .then(response => response.json())
  .then(manifest => {
    if (manifest.background_color) {
      document.body.style.backgroundColor = manifest.background_color;
    }
    if (manifest.background_image) {
      document.body.style.backgroundImage = `url(${manifest.background_image})`;
    }
  })
  .catch(error => console.error('Error loading manifest:', error));