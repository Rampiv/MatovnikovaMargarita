import { gsap } from "gsap"
import type { AnimationItem } from "lottie-web"
import type { RefObject } from "react"

interface GreetingAnimationProps {
  heartIconRef: RefObject<SVGSVGElement>
  greetingContentRef: RefObject<HTMLDivElement>
  catContainerRef: RefObject<HTMLDivElement>
}

interface ExitAnimationProps {
  arrowIconRef: RefObject<SVGSVGElement>
  greetingContentRef: RefObject<HTMLDivElement>
  navigate: () => void
}

export const GreetingAnimation = ({
  heartIconRef,
  greetingContentRef,
  catContainerRef,
}: GreetingAnimationProps) => {
  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
  })

  tl.to(heartIconRef.current, {
    scale: 1.75,
    opacity: 0,
    duration: 0.5,
    stagger: {
      each: 0.2,
      repeat: 2,
    },
  })
    .to(heartIconRef.current, {
      opacity: 1,
      duration: 0.3,
    })
    .to(heartIconRef.current, {
      scale: 100,
      duration: 0.5,
    })
    .to(
      catContainerRef.current,
      {
        opacity: 0,
        duration: 0.3,
      },
      ">-0.1",
    )
    .to(
      greetingContentRef.current,
      {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          if (heartIconRef.current) {
            heartIconRef.current.style.display = "none"
          }
        },
      },
      ">-0.5",
    )

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
    x: 200,
    duration: 0.25,
  }).to(greetingContentRef.current, {
    opacity: 0,
    duration: 1,
    onComplete: () => navigate(),
  })
  return tl
}