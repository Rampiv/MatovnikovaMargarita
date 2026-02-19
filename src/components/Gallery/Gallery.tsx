import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import psy from '@assets/image/psy.webp'

const images: GalleryItem[] = [
  {
    original: psy,
    thumbnail: psy,
  },
  {
    original: psy,
    thumbnail: psy,
  },
  {
    original: psy,
    thumbnail: psy,
  },
];

export function MyGallery() {
  const galleryRef = useRef<ImageGalleryRef>(null)

  return (
    <ImageGallery
      ref={galleryRef}
      items={images}
      infinite={true}
      lazyLoad={true}
      autoPlay={false}
      showNav={false}
    />
  )
}

