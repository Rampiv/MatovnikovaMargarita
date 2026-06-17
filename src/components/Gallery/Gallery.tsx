import { Carousel } from "antd"
import "./Gallery.scss"

interface Prop {
  arrayImg: string[]
  speedImg: number
}

export function MyGallery({ arrayImg, speedImg }: Prop) {
  return (
    <div className="carousel-content">
      <Carousel autoplay autoplaySpeed={speedImg} draggable infinite>
        {arrayImg.map((item, index) => {
          return (
            <div key={`карусель ${index} ${item}`}>
              <img
                src={item}
                alt="Картинка кабинета 1"
                className="carousel__img"
              />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
