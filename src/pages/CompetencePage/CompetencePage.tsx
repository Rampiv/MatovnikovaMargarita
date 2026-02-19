import { useContext, useEffect, useRef } from "react"
import "./CompetencePage.scss"
import { AppContext } from "../../context/contextProvider"
import { CommonLink } from "../../components"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ContentAnimation } from "@kit/ContentAnimation"

gsap.registerPlugin(useGSAP)

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
        <h1 className="h1" ref={h1Ref}>
          С чем я работаю?
        </h1>

        <p className="competence__descr" ref={el => addToDescrRefs(el, 0)}>
          Вы можете обратиться ко мне с широким спектром запросов.
        </p>

        <p className="competence__descr" ref={el => addToDescrRefs(el, 1)}>
          Перечислю основные из них:
        </p>

        <ul className="competence__list">
          <li className="competence__item" ref={el => addToListRefs(el, 0)}>
            ✔️ Работа с самооценкой и неуверенностью в себе;
          </li>
          <li className="competence__item" ref={el => addToListRefs(el, 1)}>
            ✔️ Поиск себя и личностный рост;
          </li>
          <li className="competence__item" ref={el => addToListRefs(el, 2)}>
            ✔️ Детско-родительские отношения;
          </li>
          <li className="competence__item" ref={el => addToListRefs(el, 3)}>
            ✔️ Конфликты и трудности в отношениях (в семье, между партнерами, в
            рабочем коллективе и т.д.);
          </li>
          <li className="competence__item" ref={el => addToListRefs(el, 4)}>
            ✔️ Кризисные ситуации (расставания, потеря работы и т.д.);
          </li>
          <li className="competence__item" ref={el => addToListRefs(el, 5)}>
            ✔️ Работа с травматичным опытом;
          </li>
          <li className="competence__item" ref={el => addToListRefs(el, 6)}>
            ✔️ Трудности в выражении эмоций; профориентация;
          </li>
          <li className="competence__item" ref={el => addToListRefs(el, 7)}>
            ✔️ Эмоциональное выгорание;
          </li>
          <li className="competence__item" ref={el => addToListRefs(el, 8)}>
            ✔️ Работа с телом, психосоматика;
          </li>
          <li className="competence__item" ref={el => addToListRefs(el, 9)}>
            ✔️ Тревога и депрессивные состояния;
          </li>
          <li className="competence__item" ref={el => addToListRefs(el, 10)}>
            ✔️ Расстройства пищевого поведения
          </li>
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
      </div></div>
    </section>
  )
}
