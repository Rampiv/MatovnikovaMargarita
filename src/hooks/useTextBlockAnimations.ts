import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Props {
  start: string
  elements: Array<string>
}
export const useTextBlockAnimations = ({ start, elements }: Props) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const textBlockTl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${start}`,
          start: "top 80%",
        },
      })

      elements.map(item => {
        return textBlockTl.fromTo(
          `.${item}`,
          {
            opacity: 0,
            y: 500,
            ease: "power3.out",
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.3,
            ease: "power3.out",
          },
        )
      })

      // Очистка
      return () => {
        ctx.revert()
      }
    })
  }, [elements, start])
}
