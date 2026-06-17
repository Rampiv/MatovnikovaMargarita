import { useContext, useEffect, useRef } from "react"
import "./CompetencePage.scss"
import { AppContext } from "../../context/contextProvider"
import { CommonLink } from "../../components"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ContentAnimation } from "@kit/ContentAnimation"

gsap.registerPlugin(useGSAP)

const competenceDescr = [
  "Вы можете обратиться ко мне с широким спектром запросов.",
  "Перечислю основные из них:",
]

const competenceList = [
  "Работа с самооценкой и неуверенностью в себе;",
  "поиск себя и личностный рост (сложности с выбором и принятием решений);",
  "Детско-родительские отношения, вопросы сеппарации;",
  "Конфликты и трудности в отношениях (в семье, между партнерами, в рабочем коллективе и т.д.);",
  "Эмоциональная зависимость от другого (сложности с расставанием)",
  "Кризисные ситуации (расставания, потеря работы и т.д.);",
  "Потеря, смерть близкого;",
  "Работа с травматичным опытом (в том числе птср, кптср, военная травма);",
  "Трудности с пониманием себя, в выражении эмоций;",
  "Профориентация;",
  "Эмоциональное выгорание;",
  "Работа с телом, психосоматика;",
  "Тревога и депрессивные состояния;",
  "Расстройства пищевого поведения (булимия, анорексия, переедания)",
]

export const CompetencePage = () => {
  const { setRoute } = useContext(AppContext)

  const containerRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const descrRefs = useRef<HTMLParagraphElement[]>([])
  const listItemsRef = useRef<HTMLLIElement[]>([])
  const linkRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline>()

  useEffect(() => {
    setRoute("/competence")
  }, [setRoute])

  useGSAP(
    () => {
      tl.current = ContentAnimation({
        h1Ref,
        listItemsRef,
        linkRef,
        descrRefs,
      })
    },
    { scope: containerRef },
  )

  const addToDescrRefs = (el: HTMLParagraphElement | null, index: number) => {
    if (el) descrRefs.current[index] = el
  }

  const addToListRefs = (el: HTMLLIElement | null, index: number) => {
    if (el) listItemsRef.current[index] = el
  }

  return (
    <section className="competence section-common">
      <div className="container" ref={containerRef}>
        <div className="section__container">
          <h2 className="h2-common" ref={h1Ref}>
            С чем я работаю?
          </h2>

          {competenceDescr.map((text, index) => (
            <p
              key={index}
              className="competence__descr"
              ref={el => addToDescrRefs(el, index)}
            >
              {text}
            </p>
          ))}

          <ul className="competence__list">
            {competenceList.map((text, index) => (
              <li
                key={index}
                className="competence__item"
                ref={el => addToListRefs(el, index)}
              >
                ✔️ {text}
              </li>
            ))}
          </ul>

          <div ref={linkRef}>
            <CommonLink
              data={{
                link: "/payment",
                text: "Стоимость и порядок оплаты",
              }}
              linkRef={linkRef}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
