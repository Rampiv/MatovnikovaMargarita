import { useContext, useEffect, useRef } from "react"
import "./EducationPage.scss"
import { AppContext } from "../../context/contextProvider"
import { CommonLink } from "../../components"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ContentAnimation } from "@kit/ContentAnimation"
import { MyGallery } from "../../components/Gallery"
import ed1 from "@assets/image/education/1.webp"
import ed2 from "@assets/image/education/2.webp"
import ed3 from "@assets/image/education/3.webp"
import ed4 from "@assets/image/education/4.webp"
import ed5 from "@assets/image/education/5.webp"
import ed6 from "@assets/image/education/6.webp"
import ed7 from "@assets/image/education/7.webp"
import ed8 from "@assets/image/education/8.webp"
import ed9 from "@assets/image/education/9.webp"
import ed10 from "@assets/image/education/10.webp"
import ed11 from "@assets/image/education/11.webp"
import ed12 from "@assets/image/education/12.webp"
import ed13 from "@assets/image/education/13.webp"

gsap.registerPlugin(useGSAP)

const diplomsList = [
  ed1,
  ed2,
  ed3,
  ed4,
  ed5,
  ed6,
  ed7,
  ed8,
  ed9,
  ed10,
  ed11,
  ed12,
  ed13,
]

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
  const galleryRef = useRef<HTMLDivElement>(null)
  const linkRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline>()

  useEffect(() => {
    setRoute("/education")
  }, [setRoute])

  useGSAP(
    () => {
      tl.current = ContentAnimation({
        h1Ref,
        listItemsRef,
        additionalRefs: [galleryRef.current],
        linkRef,
      })
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

          <MyGallery
            linkRef={galleryRef}
            arrayImg={diplomsList}
            speedImg={5000}
            customClassImg="education__img"
            customClassContainer="education__img-container"
          />

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
