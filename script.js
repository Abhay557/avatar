let imageCounts = { body: 5, eyes: 7, hair: 64, cloths: 64 };
let currentIndexes = { body: 0, eyes: 0, hair: 0, cloths: 0 };

function changeLayer(layer, direction) {
    let maxImages = imageCounts[layer]; // Get total images for the layer
    currentIndexes[layer] = (currentIndexes[layer] + direction + maxImages) % maxImages;
    
    let newImagePath = `${layer}/${currentIndexes[layer]}.png`;
    document.getElementById(layer).src = newImagePath;
}
