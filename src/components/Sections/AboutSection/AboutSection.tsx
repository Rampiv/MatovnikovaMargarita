import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import "./AboutSection.scss"
import { CommonLink } from "../../CommonLink"
import { ContentAnimation } from "@kit/ContentAnimation"

gsap.registerPlugin(useGSAP)

interface Props {
  isButton: boolean
  animated?: boolean // ← новый пропс
}

export const AboutSection = ({ isButton, animated = false }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const listItemsRef = useRef<HTMLLIElement[]>([])
  const linkRef = useRef<HTMLDivElement>(null)

  // Анимация только если animated=true
  useGSAP(
    () => {
      if (!animated) return
      ContentAnimation({
        h1Ref: h2Ref,
        listItemsRef,
        linkRef: isButton ? linkRef : undefined,
      })
    },
    { scope: containerRef, dependencies: [animated] },
  )

  const addToListRefs = (el: HTMLLIElement | null, index: number) => {
    if (el) listItemsRef.current[index] = el
  }

  const descriptionLines = [
    "Квир-френдли.",
    "Сейчас за плечами у меня больше 6 лет практики и несколько лет личной терапии (в которой я по сей день).",
    "Я на собственном опыте убедилась, насколько исцеляющими могут быть отношения, в которых есть принятие, искренность и безопасность. Мне знакомы продолжительные депрессивные эпизоды и последствия нарциссической травмы, и я изнутри знаю, как непросто бывает проходить через такие периоды. И могу делиться здесь своим опытом.",
    "Наверное, поэтому в своей работе я особенно ценю глубокий человеческий контакт. Мне важно не просто помогать справляться с симптомами или решать отдельные трудности, а вместе исследовать историю человека, помогая ему лучше понимать его опыт и находить опору для более полной жизни. Каждый человек для меня отдельная, уникальная история, и я отношусь к ней с большим интересом, уважением и пониманием.",
    "Много лет я занималась вокалом и выступала перед публикой, поэтому хорошо знаю, что такое страх оценки, волнение перед выступлением и возможность быть видимой (с последующим столкновением с критикой и оценкой). Но я верю, что за нашими страхами стоят желания, мечты и потенциал, которые мы можем реализовать. И я буду с вами на этом пути.",
  ]

  return (
    <section className="about section-common" ref={containerRef}>
      <div className="container">
        <div className="section__container">
          <h2 ref={h2Ref} className="h2-common">
            Обо&nbsp;мне
          </h2>
          <ul className="about__list">
            {descriptionLines.map((item, index) => (
              <li
                className="about__item"
                key={`${item}${index}`}
                ref={el => addToListRefs(el, index)}
              >
                {item}
              </li>
            ))}
          </ul>
          {isButton && (
            <div ref={linkRef}>
              <CommonLink
                data={{
                  link: "/education",
                  text: "Образование и деятельность",
                }}
                linkRef={linkRef}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}