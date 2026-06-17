import { useContext, useEffect, useRef } from "react"
import "./EducationPage.scss"
import { AppContext } from "../../context/contextProvider"
import { CommonLink } from "../../components"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ContentAnimation } from "@kit/ContentAnimation"
import { MyGallery } from "../../components/Gallery"

gsap.registerPlugin(useGSAP)

const educationList = [
  {
    id: 0,
    text: (
      <>
        🎓 Я выпускница Рязанского государственного медицинского университета
        им. И.П. Павлова`20 по специальности{" "}
        <strong>«Клиническая психология»</strong>. Специализация —{" "}
        <strong>«Патопсихологическая диагностика и психотерапия»</strong>.
      </>
    ),
  },
  {
    id: 1,
    text: (
      <>
        Имею <strong>2 повышения квалификации</strong> - 6-летнее законченное
        обучение на гештальт-терапевта в Московском Институте Гештальта и
        Психодрамы (МИГиП).
        <br />И 1 ступень Психодрамы (МИГиП).
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        ‌Прошла обучение 1-го и 2-го уровней метода Мюррей, специализирующемся
        на работе с травмой. (Программа «Становление здоровой уравновешенной
        личности через преодоление последствий травм, жестокого обращения и
        депривации»).
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        ‌Обучаюсь на специализации, посвященной работе с клинической травмой
        (ПТСР, КПТСР, в том числе военная травма).
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        С момента выпуска{" "}
        <strong>более шести лет веду активную психологическую практику</strong>{" "}
        — на моем счету несколько сотен проведенных консультаций и десятки
        довольных клиентов.
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        На протяжении нескольких лет работала в медицинском вузе (РязГМУ) и
        оказывала <strong>психологическую помощь и поддержку</strong> студентам,
        их родителям и сотрудникам учреждения.
      </>
    ),
  },
  {
    id: 6,
    text: (
      <>
        <strong>Веду психологические группы и провожу тренинги</strong> по
        развитию навыков коммуникаций, управлений конфликтами, обучению техникам
        релаксации, способам соприкосновения с бессознательным и многому другому
        (групповой формат — одно из моих любимых направлений работы психолога).
      </>
    ),
  },
  {
    id: 7,
    text: (
      <>
        <strong>
          Регулярно прохожу повышение квалификации, посещаю мастер-классы.
        </strong>{" "}
        Принимаю участие в конференциях. В том числе в качестве тренера.
      </>
    ),
  },
  {
    id: 8,
    text: (
      <>
        В 2018 году на протяжении месяца стажировалась в{" "}
        <strong>Сербии (Белград)</strong> и получала опыт работы в
        психиатрическом отделении больницы.
      </>
    ),
  },
  {
    id: 9,
    text: (
      <>
        Имею дополнительное обучение по работе с{" "}
        <strong>острыми стрессовыми состояниями</strong> в экстремальных
        ситуациях.
      </>
    ),
  },
  {
    id: 10,
    text: (
      <>
        Помимо обучения{" "}
        <strong>
          регулярно работаю в супервизионных и интервизионных группах
        </strong>{" "}
        (повышаю свою квалификацию как специалиста и получаю поддержку и опыт от
        коллег).
      </>
    ),
  },
  {
    id: 11,
    text: (
      <>
        Несколько лет нахожусь в <strong>личной терапии и супервизии</strong>,
        что позволяет мне быть включенной и постоянно повышать свой уровень
        профессионализма.
      </>
    ),
  },
]

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
    <section className="education section-common">
      <div className="container" ref={containerRef}>
        <div className="section__container">
          <h1 className="h2-common" ref={h1Ref}>
            Образование
          </h1>

          <ul className="education__list">
            {educationList.map(item => (
              <li
                key={item.id}
                className="education__item"
                ref={el => addToListRefs(el, item.id)}
              >
                {item.text}
              </li>
            ))}
          </ul>

          <MyGallery arrayImg={[]} speedImg={0} />

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
      </div>
    </section>
  )
}
