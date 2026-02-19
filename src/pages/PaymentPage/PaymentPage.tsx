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

  useEffect(() => {
    setRoute("/payment")
  }, [setRoute])

  return (
    <section className="payment section-common">
      <div className="container" ref={containerRef}>
        <div className="section__container">
          <PaymentSection />
        <div>
          <CommonLink
            data={{
              link: "/contacts",
              text: "Где можно со мной связаться?",
            }}
            linkRef={linkRef}
          />
        </div></div>
      </div>
    </section>
  )
}
