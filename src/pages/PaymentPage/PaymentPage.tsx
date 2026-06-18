import { useContext, useEffect, useRef } from "react"
import "./PaymentPage.scss"
import { AppContext } from "../../context/contextProvider"
import { CommonLink, PaymentSection } from "../../components"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export const PaymentPage = () => {
  const { setRoute } = useContext(AppContext)

  const containerRef = useRef<HTMLDivElement>(null)
  const linkRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline>()

  useEffect(() => {
    setRoute("/payment")
  }, [setRoute])

  // Анимация ссылки (отдельно от секции)
  useGSAP(
    () => {
      if (!linkRef.current) return
      tl.current = gsap.timeline({ defaults: { ease: "power2.inOut" } })
      tl.current.from(linkRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        delay: 1.2, // задержка, чтобы анимация шла после секции
      })
    },
    { scope: containerRef },
  )

  return (
    <section className="payment-page section-common">
      <div className="container" ref={containerRef}>
        <div className="section__container">
          <PaymentSection animated={true} />
          <div ref={linkRef}>
            <CommonLink
              data={{
                link: "/contacts",
                text: "Где можно со мной связаться?",
              }}
              linkRef={linkRef}
            />
          </div>
        </div>
      </div>
    </section>
  )
}