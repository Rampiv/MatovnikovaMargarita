// @ts-ignore-next-line
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"
import "./YmapSection.scss"

export const YmapSection = () => {
  return (
    <section className="ymap">
      <div className="container">
        <div className="ymap__content">
          <YMaps>
            <Map className="ymap__map" defaultState={{ center: [54.620522, 39.722765], zoom: 18 }} width="inherit" height="inherit">
              <Placemark geometry={[54.620522, 39.722765]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  )
}
