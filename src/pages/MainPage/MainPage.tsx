import { useContext, useEffect } from "react"
import "./MainPage.scss"
import { AppContext } from "../../context/contextProvider"
import { useHeroAnimations } from "../../hooks/useHeroAnimations"
import { workList } from "../../data/workList"
import { FAQList } from "../../data/FAQList"
import {
  CollapseContent,
  CollapseHeader,
  CustomExpandIcon,
} from "../../components/Accordion/Accordion"
import type { CollapseProps } from "antd"
import { Collapse } from "antd"
import { heroList } from "../../data/heroList"
import psy1 from "@assets/image/psy/psy1.webp"
import psy2 from "@assets/image/psy/psy2.webp"
import { MyGallery } from "../../components/Gallery"
import {
  AboutSection,
  ContactsSection,
  PaymentSection,
  YmapSection,
} from "../../components"
import room1 from "@assets/image/room/1.webp"
import room2 from "@assets/image/room/2.webp"
import room3 from "@assets/image/room/3.webp"
import room4 from "@assets/image/room/4.webp"
import room5 from "@assets/image/room/5.webp"

const psyArray = [psy1, psy2]
const roomArray = [room1, room2, room3, room4, room5]

export const MainPage = () => {
  const { setRoute } = useContext(AppContext)

  useHeroAnimations()

  useEffect(() => {
    setRoute("/main")
  }, [setRoute])

  const collapseWorkItems: CollapseProps["items"] = workList.map(
    (item, index) => ({
      key: String(index + 1),
      label: <CollapseHeader img={item.img} name={item.name} />,
      children: <CollapseContent descr={item.descr} link={item.link} />,
    }),
  )

  const collapseFAQItems: CollapseProps["items"] = FAQList.map(
    (item, index) => ({
      key: String(index + 1),
      label: <CollapseHeader name={item.name} />,
      children: (
        <CollapseContent
          descr={item.descr}
          link={item.link}
          linkName={item?.linkName}
        />
      ),
    }),
  )

  return (
    <>
      <section className="section-common hero">
        <div className="container">
          <div className="section__container first-container">
            <div className="hero__first-container">
              <h1 className="hide">Психолог Маргарита Матовникова</h1>
              <div className="hero__content">
                <h2 className="hero__h2">Маргарита Матовникова</h2>
                <p className="hero__descr">
                  Клинический психолог, гештальт-терапевт
                </p>
                <ul className="hero__list">
                  {heroList.map((item, index) => {
                    return (
                      <li className="hero__item" key={index}>
                        <p className="hero__item-numbers">{item.num}</p>
                        <p className="hero__item-text">{item.text}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="hero__picture">
              <MyGallery arrayImg={psyArray} speedImg={5000} />
            </div>
          </div>
        </div>
      </section>
      <section className="section-background work">
        <div className="container">
          <div className="section__container">
            <Collapse
              accordion
              ghost
              items={collapseWorkItems}
              className="work__collapse"
              expandIcon={({ isActive }) => (
                <CustomExpandIcon isActive={isActive ?? false} />
              )}
            />
          </div>
        </div>
      </section>
      <PaymentSection />
      <AboutSection isButton={false} />
      <section className="section-background FAQ">
        <div className="container">
          <div className="section__container">
            <h2 className="h2-common FAQ__h2">Часто задаваемые вопросы</h2>
            <Collapse
              accordion
              ghost
              items={collapseFAQItems}
              className="work__collapse"
              expandIcon={({ isActive }) => (
                <CustomExpandIcon isActive={isActive ?? false} />
              )}
            />
          </div>
        </div>
      </section>
      <section className="carousel section-common" id="gallery">
        <div className="container">
          <div className="section__container carousel__container">
            <div className="carousel__block">
              <MyGallery arrayImg={roomArray} speedImg={5000} />
            </div>
          </div>
        </div>
      </section>
      <YmapSection />
      <ContactsSection />
    </>
  )
}
