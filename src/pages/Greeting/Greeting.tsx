import { useNavigate } from "react-router"
import "./Greetings.scss"
import { useRef, useCallback, useContext, useEffect, useState } from "react"
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

  const [fireworks, setFireworks] = useState<
    Array<{ id: string; x: number; y: number }>
  >([])

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

  const mousemoveEvent = useCallback((event: React.MouseEvent) => {
    const id = `${event.clientX}-${event.clientY}-${Date.now()}`
    setFireworks(prev => [...prev, { id, x: event.clientX, y: event.clientY }])

    setTimeout(() => {
      setFireworks(fws => fws.filter(fw => fw.id !== id))
    }, 1000)
  }, [])

  return (
    <section className="greeting" ref={greeting} onMouseMove={mousemoveEvent}>
      <HeartIcon className="greeting__hearticon" refProp={HeartIconRef} />
      <CatAnimation refProp={CatRef} />
      <div
        className="greeting__content content-common"
        ref={greetingContentRef}
      >
        <h1 className="h1 greeting__h1">
          Это лучшее время, чтобы начать что-то делать
        </h1>
        <button className="greeting__link" onClick={onClick}>
          <ArrowIcon className="greeting__arrowicon" refProp={ArrowIconRef} />
        </button>
      </div>
      {fireworks.map(firework => (
        <div
          key={firework.id}
          className="firework"
          style={{
            left: `${firework.x}px`,
            top: `${firework.y}px`,
            position: "fixed",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
      ))}
    </section>
  )
}
