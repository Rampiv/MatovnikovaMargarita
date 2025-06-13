import { gsap } from "gsap"
import type { RefObject } from "react"

interface Props {
  h1Ref: RefObject<HTMLHeadingElement>
  listItemsRef: RefObject<HTMLLIElement[]>
  linkRef?: RefObject<HTMLDivElement>
  descrRefs?: RefObject<HTMLParagraphElement[]>
  additionalRefs?: (HTMLElement | null)[]
  reverseAnimation?: boolean
}

export const ContentAnimation = ({
  h1Ref,
  listItemsRef,
  linkRef,
  descrRefs,
  additionalRefs = [],
  reverseAnimation
}: Props) => {
  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
  })

  // Анимация заголовка
  tl.from(h1Ref.current, {
    y: 50,
    opacity: 0,
    duration: 0.8,
  })

  // Анимация дополнительных описаний (если есть)
  if (descrRefs?.current) {
    tl.from(
      descrRefs.current,
      {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
      },
      "-=0.4"
    )
  }

  // Анимация дополнительных элементов (если есть)
  const validAdditionalRefs = additionalRefs.filter(Boolean) as HTMLElement[]
  if (validAdditionalRefs.length > 0) {
    tl.from(
      validAdditionalRefs,
      {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      },
      "-=0.3"
    )
  }

  // Анимация элементов списка
  tl.from(
    listItemsRef.current,
    {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
    },
    "-=0.4"
  )

  // Анимация ссылки
  if (linkRef) {
    tl.from(
      linkRef?.current,
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.2"
    )
  }

  if (reverseAnimation) {
    tl.reverse()
  }

  return tl
}