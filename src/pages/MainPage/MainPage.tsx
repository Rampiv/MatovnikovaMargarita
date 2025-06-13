import { useContext, useEffect, useMemo, useRef } from "react"
import "./MainPage.scss"
import { AppContext } from "../../context/contextProvider"
import { Link } from "react-router"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ContentAnimation } from "@kit/ContentAnimation"

gsap.registerPlugin(useGSAP)

export const MainPage = () => {
  const { setRoute } = useContext(AppContext)

  const containerRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const descrRefs = useRef<HTMLParagraphElement[]>([])
  const listItemsRef = useRef<HTMLLIElement[]>([])
  const tl = useRef<gsap.core.Timeline>()

  useEffect(() => {
    setRoute("/main")
  }, [setRoute])

  const navItems = useMemo(
    () => [
      { to: "/about", text: "Обо мне" },
      { to: "/education", text: "Образование" },
      { to: "/competence", text: "Компетенции" },
      { to: "/payment", text: "Оплата" },
      { to: "/contacts", text: "Контакты" },
    ],
    [],
  )

  useGSAP(
    () => {
      tl.current = ContentAnimation({
        h1Ref,
        listItemsRef,
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
    <section className="mainpage">
      <div className="container" ref={containerRef}>
        <h1 className="h1" ref={h1Ref}>
          Рада видеть вас на моей странице!
        </h1>

        <p className="mainpage__descr" ref={el => addToDescrRefs(el, 0)}>
          Меня зовут{" "}
          <span className="mainpage__descr-name">
            Матовникова Маргарита Вадимовна
          </span>
        </p>

        <p className="mainpage__descr" ref={el => addToDescrRefs(el, 1)}>
          Этот сайт создан, чтобы вы могли заранее узнать, как я работаю и с
          какими запросами помогаю.
        </p>

        <p className="mainpage__descr" ref={el => addToDescrRefs(el, 2)}>
          Для навигации{" "}
          <strong>нажмите кнопку меню в верхнем левом углу</strong> или с
          помощью блоков снизу
        </p>

        <p className="mainpage__descr" ref={el => addToDescrRefs(el, 3)}>
          Если у вас останутся вопросы после просмотра сайта — буду рада
          ответить на них во время нашей первой встречи.
        </p>

        <ul className="mainpage__list">
          {navItems.map((item, index) => (
            <li
              className="mainpage__item"
              key={`${item.to} ${item.text}`}
              ref={el => addToListRefs(el, index)}
            >
              <Link to={item.to} className="mainpage__link">
                <span className="mainpage__text">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
