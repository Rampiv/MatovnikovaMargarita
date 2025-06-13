import { useContext, useEffect, useRef } from "react"
import "./AboutPage.scss"
import { AppContext } from "../../context/contextProvider"
import { CommonLink } from "../../components"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ContentAnimation } from "@kit/ContentAnimation"

gsap.registerPlugin(useGSAP)

export const AboutPage = () => {
  const { setRoute } = useContext(AppContext)

  const containerRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const listItemsRef = useRef<HTMLLIElement[]>([])
  const linkRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline>()

  useEffect(() => {
    setRoute("/about")
  })

  useGSAP(
    () => {
      tl.current = ContentAnimation({
        h1Ref,
        listItemsRef,
        linkRef,
      })
    },

    { scope: containerRef },
  )

  const descriptionLines = [
    "Friendly.",
    "В работе ценю бережность и принятие человека таким, какой он есть.",
    "Признаю и помогаю обрести людям их уникальность.",
    "Каждый человек для меня — совершенно новая, непохожая на других исключительная история. 🌼",
    "История же моей жизни связана не только с профессией, но и сценой.",
    "На протяжении многих лет вокал был второй важнейшей стороной моей жизни после психологии, а выступления — неотъемлемой частью меня.",
    "Поэтому как никто другой могу рассказать об опыте и сложностях преодоления страха публичных выступлений.",
    "Поддерживаю и искренне верю в силы и возможности людей.",
  ]

  const addToListRefs = (el: HTMLLIElement | null, index: number) => {
    if (el) listItemsRef.current[index] = el
  }

  return (
    <section className="about">
      <div className="container" ref={containerRef}>
        <h1 className="h1" ref={h1Ref}>
          Обо&nbsp;мне
        </h1>
        <ul className="about__list">
          {descriptionLines.map((item, index) => {
            return (
              <li
                className="about__item"
                key={`${item}${index}`}
                ref={el => addToListRefs(el, index)}
              >
                {item}
              </li>
            )
          })}
        </ul>
        <CommonLink
          data={{
            link: "/education",
            text: "Образование и деятельность",
          }}
          linkRef={linkRef}
        />
      </div>
    </section>
  )
}
