let layers = {};
let currentIndexes = { layer1: 0, layer2: 0, layer3: 0, layer4: 0 };

// Load JSON data
fetch('layers.json')
    .then(response => response.json())
    .then(data => {
        layers = data.layers;
    })
    .catch(error => console.error('Error loading JSON:', error));

// Function to change avatar layers
function changeLayer(layer, direction) {
    if (!layers[layer]) return; // Ensure layers are loaded
    let images = layers[layer];
    currentIndexes[layer] = (currentIndexes[layer] + direction + images.length) % images.length;
    document.getElementById(layer).src = images[currentIndexes[layer]];
}
