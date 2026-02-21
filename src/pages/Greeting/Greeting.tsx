import { useNavigate } from "react-router"
import "./Greetings.scss"
import { useRef, useCallback, useContext, useEffect } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowIcon, HeartIcon } from "@assets/icons"
import {
  GreetingAnimation,
  GreetingExitAnimation,
} from "@kit/GreetingAnimation"
import { AppContext } from "../../context/contextProvider"
import { CatAnimation } from "../../components/ui-kit"
import type { LottieRefCurrentProps } from "lottie-react"

gsap.registerPlugin(useGSAP)

export const Greeting = () => {
  const greeting = useRef<HTMLDivElement>(null)
  const HeartIconRef = useRef<SVGSVGElement>(null)
  const CatRef = useRef<LottieRefCurrentProps>(null)
  const ArrowIconRef = useRef<SVGSVGElement>(null)

  const greetingContentRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()

  const { setRoute } = useContext(AppContext)

  useGSAP(
    () => {
      GreetingAnimation({
        heartIconRef: HeartIconRef,
        greetingContentRef: greetingContentRef,
        catRef: CatRef,
      })
    },
    { scope: greeting },
  )

  const onClick = useCallback(() => {
    GreetingExitAnimation({
      greetingContentRef: greetingContentRef,
      arrowIconRef: ArrowIconRef,
      navigate: () => navigate("/main"),
    })
  }, [navigate])

  useEffect(() => {
    setRoute("/")
  }, [setRoute])

  return (
    <section className="greeting" ref={greeting}>
      <HeartIcon className="greeting__hearticon" refProp={HeartIconRef} />
      <CatAnimation refProp={CatRef} />
      <div
        className="greeting__content content-common"
        ref={greetingContentRef}
      >
        <h2 className="greeting__h2">
          Это лучшее время, чтобы начать что-то делать
        </h2>
        <button className="greeting__link" onClick={onClick}>
          <ArrowIcon className="greeting__arrowicon" refProp={ArrowIconRef} />
        </button>
      </div>
    </section>
  )
}
