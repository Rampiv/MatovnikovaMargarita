import { gsap } from "gsap"
import type { RefObject } from "react"

interface GreetingAnimationProps {
  heartIconRef: RefObject<SVGSVGElement>
  greetingContentRef: RefObject<HTMLDivElement>
}

interface ExitAnimationProps {
  arrowIconRef: RefObject<SVGSVGElement>
  greetingContentRef: RefObject<HTMLDivElement>
  navigate: () => void
}

export const GreetingAnimation = ({
  heartIconRef,
  greetingContentRef,
}: GreetingAnimationProps) => {
  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
  })

  tl.to(heartIconRef.current, {
    scale: 1.75,
    opacity: 0,
    duration: 0.8,
    stagger: {
      each: 0.5,
      repeat: 2,
    },
  })
    .to(heartIconRef.current, {
      opacity: 1,
      duration: 0.5,
    })
    .to(
      heartIconRef.current,
      {
        scale: 100,
        duration: 0.5,
      },
      "<",
    )
    .to(greetingContentRef.current, {
      opacity: 1,
      duration: 1,
    })

  return tl
}

export const GreetingExitAnimation = ({
  greetingContentRef,
  arrowIconRef,
  navigate,
}: ExitAnimationProps) => {
  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
  })

  tl.to(arrowIconRef.current, {
    x: 100,
    duration: 0.25,
  }).to(greetingContentRef.current, {
    opacity: 0,
    duration: 1,
    onComplete: () => navigate(),
  })
  return tl
}
