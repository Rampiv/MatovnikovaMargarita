import { useContext, useEffect, useRef } from "react"
import "./PaymentPage.scss"
import { AppContext } from "../../context/contextProvider"
import { CommonLink } from "../../components"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ContentAnimation } from "@kit/ContentAnimation"

gsap.registerPlugin(useGSAP)

export const PaymentPage = () => {
  const { setRoute } = useContext(AppContext)

  const containerRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const listItemsRef = useRef<HTMLLIElement[]>([])
  const linkRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline>()

  useEffect(() => {
    setRoute("/payment")
  }, [setRoute])

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

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = e.currentTarget as HTMLAnchorElement
    const href = target.getAttribute("href") || "/"

    // Обратная анимация
    if (tl.current) {
      tl.current.reverse().then(() => {
        window.location.href = href
      })
    } else {
      window.location.href = href
    }
  }

  const addToListRefs = (el: HTMLLIElement | null, index: number) => {
    if (el) listItemsRef.current[index] = el
  }

  return (
    <section className="payment">
      <div className="container" ref={containerRef}>
        <h1 className="h1" ref={h1Ref}>
          Оплата
        </h1>

        <ul className="payment__list">
          <li className="payment__item" ref={el => addToListRefs(el, 0)}>
            <div className="payment__personal">
              <span>
                Очная встреча (г. Рязань) — <strong>3000 р</strong>
              </span>
              <span>
                Онлайн встреча — <strong>3000 р</strong>
              </span>
              <span>
                Длительность консультации — <strong>55 минут</strong>
              </span>
            </div>
          </li>

          <li className="payment__item" ref={el => addToListRefs(el, 1)}>
            <div className="payment__couples">
              <span>
                Парная консультация с партнером — <strong>4000 р</strong>
              </span>
              <span>
                Длительность — <strong>1 час 20 минут</strong>
              </span>
            </div>
          </li>

          <li className="payment__item" ref={el => addToListRefs(el, 2)}>
            Для новых клиентов я предлагаю бесплатный 10-15-минутный созвон, на
            котором мы можем с Вами познакомиться, побыть в контакте, задать
            друг другу интересующие вопросы и договориться о формате работы.
          </li>

          <li className="payment__item" ref={el => addToListRefs(el, 3)}>
            <div className="payment__attention">
              <span>
                <u>Обратите внимание:</u>
              </span>
              <span>
                Стоимость консультаций может корректироваться с учётом повышения
                квалификации и изменений нагрузки
              </span>
            </div>
          </li>
        </ul>

        <div>
          <CommonLink
            data={{
              link: "/contacts",
              text: "Где можно со мной связаться?",
            }}
            linkRef={linkRef}
            onClick={handleLinkClick}
          />
        </div>
      </div>
    </section>
  )
}
