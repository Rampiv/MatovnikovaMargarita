import { useContext, useEffect, useRef } from "react"
import "./EducationPage.scss"
import { AppContext } from "../../context/contextProvider"
import { CommonLink } from "../../components"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ContentAnimation } from "@kit/ContentAnimation"

gsap.registerPlugin(useGSAP)

export const EducationPage = () => {
  const { setRoute } = useContext(AppContext)

  const containerRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const listItemsRef = useRef<HTMLLIElement[]>([])
  const linkRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline>()

  useEffect(() => {
    setRoute("/education")
  }, [setRoute])

  useGSAP(
    () => {
      tl.current = ContentAnimation({ h1Ref, listItemsRef, linkRef })
    },
    { scope: containerRef },
  )

  const addToListRefs = (el: HTMLLIElement | null, index: number) => {
    if (el) listItemsRef.current[index] = el
  }

  return (
    <section className="education">
      <div className="container" ref={containerRef}>
        <h1 className="h1" ref={h1Ref}>
          Образование и деятельность
        </h1>

        <ul className="education__list">
          <li className="education__item" ref={el => addToListRefs(el, 0)}>
            🎓 Я выпускница Рязанского государственного медицинского
            университета им. И.П. Павлова`20 по специальности
            <strong>«Клиническая психология»</strong>. Специализация —
            <strong>«Патопсихологическая диагностика и психотерапия»</strong>.
          </li>

          <li className="education__item" ref={el => addToListRefs(el, 1)}>
            Имею <strong>2 повышения квалификации</strong> в направлении
            гештальт-терапии и психодрамы (1 ступень).
          </li>

          <li className="education__item" ref={el => addToListRefs(el, 2)}>
            В марте завершила многолетнее обучение на второй ступени
            гештальт-подхода в
            <strong>Московском Институте Гештальта и Психодрамы (МИГиП)</strong>
            .
          </li>

          <li className="education__item" ref={el => addToListRefs(el, 3)}>
            С момента выпуска
            <strong>
              более пяти лет веду активную психологическую практику
            </strong>
            — на моем счету несколько сотен проведенных консультаций и десятки
            довольных клиентов.
          </li>

          <li className="education__item" ref={el => addToListRefs(el, 4)}>
            На протяжении нескольких лет работала в медицинском вузе (РязГМУ) и
            оказывала <strong>психологическую помощь и поддержку</strong>
            студентам, их родителям и сотрудникам учреждения.
          </li>

          <li className="education__item" ref={el => addToListRefs(el, 5)}>
            <strong>Веду психологические группы и провожу тренинги</strong> по
            развитию навыков коммуникаций, управлений конфликтами, обучению
            техникам релаксации, способам соприкосновения с бессознательным и
            многому другому.
          </li>

          <li className="education__item" ref={el => addToListRefs(el, 6)}>
            <strong>
              Регулярно прохожу повышение квалификации, посещаю мастер-классы.
              Принимаю участие в конференциях.
            </strong>
            В том числе в качестве тренера.
          </li>

          <li className="education__item" ref={el => addToListRefs(el, 7)}>
            В 2018 году на протяжении месяца стажировалась в
            <strong>Сербии (Белград)</strong> и получала опыт работы в
            психиатрическом отделении больницы.
          </li>

          <li className="education__item" ref={el => addToListRefs(el, 8)}>
            Имею дополнительное обучение по работе с
            <strong>острыми стрессовыми состояниями</strong> в экстремальных
            ситуациях.
          </li>

          <li className="education__item" ref={el => addToListRefs(el, 9)}>
            Помимо обучения
            <strong>
              регулярно работаю в супервизионных и интервизионных группах
            </strong>
            (повышаю свою квалификацию как специалиста и получаю поддержку и
            опыт от коллег).
          </li>

          <li className="education__item" ref={el => addToListRefs(el, 10)}>
            Нахожусь в <strong>личной терапии и супервизии</strong>, что
            позволяет мне быть включенной и постоянно повышать свой уровень
            профессионализма.
          </li>
        </ul>

        <div ref={linkRef}>
          <CommonLink
            data={{
              link: "/competence",
              text: "Компетенции",
            }}
            linkRef={linkRef}
          />
        </div>
      </div>
    </section>
  )
}
