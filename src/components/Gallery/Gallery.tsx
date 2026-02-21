import { useRef } from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/image-gallery.css"
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery"
import room1 from "@assets/image/room/1.webp"
import room2 from "@assets/image/room/2.webp"
import room3 from "@assets/image/room/3.webp"
import room4 from "@assets/image/room/4.webp"
import room5 from "@assets/image/room/5.webp"

import "./Gallery.scss"

const images: GalleryItem[] = [
  {
    original: room3,
    thumbnail: room3,
    thumbnailHeight: "65px",
  },
  {
    original: room2,
    thumbnail: room2,
    thumbnailHeight: "65px",
  },
  {
    original: room1,
    thumbnail: room1,
    thumbnailHeight: "65px",
  },
  {
    original: room4,
    thumbnail: room4,
    thumbnailHeight: "65px",
  },
  {
    original: room5,
    thumbnail: room5,
    thumbnailHeight: "65px",
  },
]

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
      thumbnailPosition="left"
    />
  )
}
