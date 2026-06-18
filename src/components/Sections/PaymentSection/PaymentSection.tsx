import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import "./PaymentSection.scss"
import { ContentAnimation } from "@kit/ContentAnimation"

gsap.registerPlugin(useGSAP)

interface Props {
  animated?: boolean
}

export const PaymentSection = ({ animated = false }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const textRefs = useRef<HTMLParagraphElement[]>([])

  useGSAP(
    () => {
      if (!animated) return
      ContentAnimation({
        h1Ref: h2Ref,
        descrRefs: textRefs,
      })
    },
    { scope: containerRef, dependencies: [animated] },
  )

  const addToTextRefs = (el: HTMLParagraphElement | null, index: number) => {
    if (el) textRefs.current[index] = el
  }

  return (
    <section
      className="payment section-common"
      id="payment"
      ref={containerRef}
    >
      <div className="container">
        <div className="section__container">
          <h2 ref={h2Ref} className="h2-common">
            Стоимость и порядок оплаты
          </h2>
          <div className="payment__content">
            <p
              className="payment__text payment__text_margin"
              ref={el => addToTextRefs(el, 0)}
            >
              Длительность консультации — <b>55</b> минут.
            </p>
            <p
              className="payment__text"
              ref={el => addToTextRefs(el, 1)}
            >
              Очная встреча (г. Рязань) — <b>4000</b> р
            </p>
            <p
              className="payment__text payment__text_margin"
              ref={el => addToTextRefs(el, 2)}
            >
              Онлайн встреча — <b>4000</b> р
            </p>
            <p
              className="payment__text"
              ref={el => addToTextRefs(el, 3)}
            >
              Парная консультация с партнером – <b>5500</b> р
            </p>
            <p
              className="payment__text payment__text_margin"
              ref={el => addToTextRefs(el, 4)}
            >
              Длительность — <b>1 час 20 минут</b>
            </p>
            <p
              className="payment__text payment__text_margin"
              ref={el => addToTextRefs(el, 5)}
            >
              Если вам важно со мной познакомиться и услышать вживую – мы можем
              устроить небольшой 10-15 минутный созвон, чтобы задать друг другу
              интересующие вопросы и договориться о формате работы.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}