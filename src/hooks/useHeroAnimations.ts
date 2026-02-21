import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const useHeroAnimations = () => {
  useEffect(() => {
    // Создаём контекст GSAP для изоляции анимаций этого компонента
    const ctx = gsap.context(() => {
      // анимации левого контейнера
      const firstContainerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero__first-container",
          start: "top 100%",
          toggleActions: "play none none none", // проиграть один раз
        },
      })
      firstContainerTl.fromTo(
        ".hero__first-container",
        { opacity: 0, x: -500 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
      )

      // анимация появления психолога
      const psychologistTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero__picture",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      })
      psychologistTl.fromTo(
        ".hero__picture",
        { opacity: 0, x: 500 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
      )

      // анимация появления блоков с плюсами
      const plusTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero__list",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      })
      plusTl.fromTo(
        ".hero__item",
        { opacity: 0, y: 500 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.4, 
          duration: 1, 
          ease: "power3.out" 
        },
      )
    })

    return () => {
      ctx.revert()
    }
  }, []) 
}