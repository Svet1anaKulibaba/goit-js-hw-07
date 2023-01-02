import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector(".gallery");
const createGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
</div>`;
  })
  .join("");
divGallery.insertAdjacentHTML("afterbegin", createGalleryItems);

var lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250, captionsData: 'alt'
  
});
