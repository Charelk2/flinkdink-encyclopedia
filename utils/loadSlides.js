// src/utils/loadSlides.js

const images = require.context("../images", false, /\.(jpg|jpeg|png)$/);

// Function to get all images
export function getImages() {
  return images.keys().map(images);
}

// Function to get a random image
export function getRandomImage() {
  const imageList = getImages();
  const randomIndex = Math.floor(Math.random() * imageList.length);
  return imageList[randomIndex];
}
