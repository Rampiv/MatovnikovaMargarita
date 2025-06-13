import { gsap } from "gsap"
import type { RefObject } from "react"

interface BurgerAnimationProps {
  elementRef: RefObject<Element>
}

export const BurgerAnimationOn = ({ elementRef }: BurgerAnimationProps) => {
  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
  })

  tl.fromTo(
    elementRef.current,
    {
      x: 300,
      duration: 1,
    },
    { x: 10},
  ).to(
    elementRef.current,
    {
      display: "flex",
    },
    "<",
  )

  return tl
}

export const BurgerAnimationOff = ({ elementRef }: BurgerAnimationProps) => {
  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
  })

  tl.to(elementRef.current, { x: 300 }).to(elementRef.current, {
    display: "none",
  })

  return tl
}
