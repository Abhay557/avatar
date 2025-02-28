let imageCounts = { body: 5, eyes: 7, hair: 64, cloths: 64 };
let currentIndexes = { body: 0, eyes: 0, hair: 0, cloths: 0 };

function changeLayer(layer, direction) {
    let maxImages = imageCounts[layer];
    currentIndexes[layer] = (currentIndexes[layer] + direction + maxImages) % maxImages;
    updateImage(layer);
}

function randomizeAvatar() {
    for (let layer in imageCounts) {
        currentIndexes[layer] = Math.floor(Math.random() * imageCounts[layer]);
        updateImage(layer);
    }
}

function updateImage(layer) {
    let newImagePath = `${layer}/${currentIndexes[layer]}.png`;
    document.getElementById(layer).src = newImagePath;
}
