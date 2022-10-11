import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryId = document.querySelector("div.gallery");

// Old scool

const element = galleryItems.map(el => {

    const linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link'),
    linkEl.href = el.preview;
    
    const imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = el.preview;
    imgEl.dataset.source = el.original; 
    imgEl.alt = el.description;

    linkEl.append(imgEl);
    return linkEl;
});

galleryId.append(...element);

// ============ Modal win

galleryId.addEventListener('click', (evt) => {
        evt.preventDefault(),
        
    console.log(evt.currentTarget);
    console.log(evt.target);

    if(evt.target === evt.currentTarget)
    return;
    
        // console.log('Уря');
        // console.log(evt.target.dataset.source);

        const instance = basicLightbox.create(`
        <div claas="modal">
        <img src="${evt.target.dataset.source}" width=100% />
        </div>
        `);
        instance.show();    
})


// NEW scool


// const images = [
//     {
//       url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'White and Black Long Fur Cat',
//     },
//     {
//       url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//       url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Group of Horses Running',
//     },
//   ];
// const imgListId = document.querySelector('.gallery');
// imgListId.classList.add('flexbox');

// const createImgEl = images.map((img)  => `<li class="list-item flex-elem">
// <img src="${img.url}" alt="${img.alt}" width="480">
// </li>`) .join("");

// imgListId.insertAdjacentHTML("afterbegin", createImgEl)