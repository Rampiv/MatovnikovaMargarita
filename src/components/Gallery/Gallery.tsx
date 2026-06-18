import { Carousel } from "antd"
import "./Gallery.scss"
import type { RefObject } from "react"

interface Prop {
  arrayImg: string[]
  speedImg: number
  customClassImg?: string
  customClassContainer?: string
  linkRef?: RefObject<HTMLDivElement>
}

export function MyGallery({
  arrayImg,
  speedImg,
  customClassImg,
  customClassContainer,
  linkRef,
}: Prop) {
  return (
    <div className={`carousel-content ${customClassContainer}`} ref={linkRef}>
      <Carousel autoplay autoplaySpeed={speedImg} draggable infinite>
        {arrayImg.map((item, index) => {
          return (
            <div key={`карусель ${index} ${item}`}>
              <img
                src={item}
                alt="Картинка кабинета 1"
                className={`carousel__img ${customClassImg}`}
              />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
