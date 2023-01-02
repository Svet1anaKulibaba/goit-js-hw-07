import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector('.gallery');
const createGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
  })
  .join('');
divGallery.insertAdjacentHTML("beforeend", createGalleryItems);

divGallery.addEventListener("click", onGalleryBoxClick);
function onGalleryBoxClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }
    let bigImg = event.target.dataset.source;
    console.log(bigImg);

    const instance = basicLightbox.create(`
    <img src=${bigImg} width="800" height="600">
    `);
    instance.show();

    document.addEventListener('keydown', onCloseImg);
    function onCloseImg(event) {
        if (event.code === "Escape") {
            instance.close()
        }
    }
}




//  console.log(galleryItems);
