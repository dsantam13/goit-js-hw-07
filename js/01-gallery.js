import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryImages = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`).join("");

gallery.innerHTML = galleryImages;

gallery.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    } 
    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}">
    `);
    instance.show();

    gallery.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    });
});

