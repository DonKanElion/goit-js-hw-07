import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryId = document.querySelector("ul.gallery");

// Old scool

// const element = galleryItems.map(el => {

//     const linkEl = document.createElement('a');
//     linkEl.classList.add('gallery__item'),
//     linkEl.href = el.preview;
    
//     const imgEl = document.createElement('img');
//     imgEl.classList.add('gallery__image');
//     imgEl.src = el.preview;
//     imgEl.dataset.source = el.original; 
//     imgEl.alt = el.description;

//     linkEl.append(imgEl);
//     return linkEl;
// });

// galleryId.append(...element);

// NEW scool

const createImgEl = galleryItems.map(({ preview, original, descreption})  => 

`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${descreption}" />
</a>`).join('');

galleryId.insertAdjacentHTML("beforeend", createImgEl);

// ============ Modal win

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: "img",
    captionPosition: "bottom",
    captionsData: "alt",
    captionDelay: 250,
});