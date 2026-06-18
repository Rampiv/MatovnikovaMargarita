import { gsap } from "gsap"
import type { RefObject } from "react"

interface Props {
  h1Ref?: RefObject<HTMLElement>
  listItemsRef?: RefObject<HTMLElement[]>
  linkRef?: RefObject<HTMLElement>
  descrRefs?: RefObject<HTMLElement[]>
  additionalRefs?: (HTMLElement | null)[]
  reverseAnimation?: boolean
}

export const ContentAnimation = ({
  h1Ref,
  listItemsRef,
  linkRef,
  descrRefs,
  additionalRefs = [],
  reverseAnimation = false,
}: Props) => {
  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
  })

  if (h1Ref?.current) {
    tl.from(h1Ref.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
    })
  }

  if (descrRefs?.current && descrRefs.current.length > 0) {
    tl.from(
      descrRefs.current,
      {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
      },
      "-=0.4",
    )
  }

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
      "-=0.3",
    )
  }

  if (listItemsRef?.current && listItemsRef.current.length > 0) {
    tl.from(
      listItemsRef.current,
      {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
      },
      "-=0.4",
    )
  }

  if (linkRef?.current) {
    tl.from(
      linkRef.current,
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.2",
    )
  }

  if (reverseAnimation) {
    tl.reverse()
  }

  return tl
}