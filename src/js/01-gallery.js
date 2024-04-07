import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { addImagesToGallery } from './02-lightbox.js';
// Add imports above this line
import { galleryItems } from './gallery-items';
let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// Change code below this line

console.log(galleryItems);
