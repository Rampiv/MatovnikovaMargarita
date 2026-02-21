import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const useWorkAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
    const workTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work",
        start: "top 100%",
      },
    })
    workTl.fromTo(
      ".ant-collapse-item",
      {
        opacity: 0,
        y: 500,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        duration: 0.3,
        ease: "power3.out",
      },
    )

    // Очистка
    return () => {
     ctx.revert()
    }
  })
  }, [])
}
