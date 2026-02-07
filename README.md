# Avatar Maker 

A web-based avatar maker where four overlapping image layers (`body`, `eyes`, `hair`, `cloths`) create a full avatar. Users can change each layer using navigation buttons or generate a random avatar.

##  Features  
- Layer-based avatar customization  
- 8 navigation buttons to change layers  
- 🎲 **Randomize Avatar** button to create a unique look instantly  
- Uses assets from **Raid Heroes: Total War**  
- Live preview: [Click Here](https://abhay557.github.io/avatar/)

##  How to Use  
1. Open `index.html` in a browser.  
2. Click the **left/right buttons** to change each layer.  
3. Click **🎲 Randomize Avatar** to generate a unique look instantly!  

##  Total Avatar Combinations  
With all layers combined, there are **143,360 possible avatar combinations!**  

## 🛠️ Technologies Used  
- HTML  
- CSS  
- JavaScript  

##  Code Structure  
```
/avatar-maker
│── index.html    # The main UI with image layers & buttons
│── styles.css    # Styling for avatar layout & buttons
│── script.js     # Core logic for image swapping & randomization
│── body/         # Folder containing 5 images (0.png - 4.png)
│── eyes/         # Folder containing 7 images (0.png - 6.png)
│── hair/         # Folder containing 64 images (0.png - 63.png)
│── cloths/       # Folder containing 64 images (0.png - 63.png)
```

---  

##  How the Code Works  
### **1️ JavaScript Logic (script.js)**  
The core logic is handled by JavaScript, where each layer has a predefined **number of images**, and the user can switch between them.  

```js
let imageCounts = { body: 5, eyes: 7, hair: 64, cloths: 64 };
let currentIndexes = { body: 0, eyes: 0, hair: 0, cloths: 0 };
```  
- `imageCounts` → Stores the total images available for each layer.  
- `currentIndexes` → Keeps track of the **current image index** for each layer.  

#### **2️ Image Switching (`changeLayer`)**  
```js
function changeLayer(layer, direction) {
    let maxImages = imageCounts[layer];
    currentIndexes[layer] = (currentIndexes[layer] + direction + maxImages) % maxImages;
    updateImage(layer);
}
```  
- Moves the **current image index** forward (`+1`) or backward (`-1`).  
- Uses **modulus (`%`) arithmetic** to wrap around when reaching the first/last image.  
- Calls `updateImage(layer)`, which updates the `<img>` tag source dynamically.  

#### **3️ Updating the Image Source (`updateImage`)**  
```js
function updateImage(layer) {
    let newImagePath = `${layer}/${currentIndexes[layer]}.png`;
    document.getElementById(layer).src = newImagePath;
}
```  
- Constructs the correct image path based on `layer` and `currentIndexes[layer]`.  
- Updates the `src` attribute of the `<img>` element for that layer.  

#### **4️ Random Avatar Generation (`randomizeAvatar`)**  
```js
function randomizeAvatar() {
    for (let layer in imageCounts) {
        currentIndexes[layer] = Math.floor(Math.random() * imageCounts[layer]);
        updateImage(layer);
    }
}
```  
- Loops through all layers (`body`, `eyes`, `hair`, `cloths`).  
- Randomly picks an image for each layer using `Math.random()`.  
- Calls `updateImage(layer)` to update the avatar.  

##  Image Assets  
- **Game:** Raid Heroes: Total War  
- *All assets belong to their respective owners.*

##  Want to Contribute?  
1. Fork this repo: [https://github.com/Abhay557/avatar](https://github.com/Abhay557/avatar)  
2. Clone it:  
   ```sh
   git clone https://github.com/YOUR_USERNAME/avatar.git
   ```  
3. Make changes and push:  
   ```sh
   git add .
   git commit -m "Your message"
   git push origin main
   ``` 

##  License  
This project is open-source under the [MIT License](LICENSE).


