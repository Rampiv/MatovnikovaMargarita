import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { InstagramIcon, TgIcon, VkIcon } from "@assets/icons"
import b17 from "@assets/icons/b17.webp"
import { Link } from "react-router"
import { ContentAnimation } from "@kit/ContentAnimation"
import "./ContactsSection.scss"

gsap.registerPlugin(useGSAP)

interface Props {
  animated?: boolean
}

export const ContactsSection = ({ animated = false }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const descrRefs = useRef<HTMLSpanElement[]>([])
  const listItemsRef = useRef<HTMLLIElement[]>([])
  const attentionRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      if (!animated) return
      ContentAnimation({
        h1Ref,
        descrRefs,
        listItemsRef,
        additionalRefs: [attentionRef.current],
      })
    },
    { scope: containerRef, dependencies: [animated] },
  )

  const addToDescrRefs = (el: HTMLSpanElement | null, index: number) => {
    if (el) descrRefs.current[index] = el
  }

  const addToListRefs = (el: HTMLLIElement | null, index: number) => {
    if (el) listItemsRef.current[index] = el
  }

  return (
    <section className="contacts section-common" ref={containerRef}>
      <div className="container">
        <div className="section__container">
          <h1 ref={h1Ref} className="h2-common contacts__h2">
            Контакты
          </h1>

          <div className="contacts__common">
            <span ref={el => addToDescrRefs(el, 0)}>
              Вы можете связаться со мной в мессенджерах (WhatsApp, Telegram) по
              номеру телефона:
            </span>
            <span ref={el => addToDescrRefs(el, 1)}>8-900-905-74-25</span>
          </div>

          <div className="contacts__common">
            <span ref={el => addToDescrRefs(el, 2)}>
              Убедительно прошу отправлять <u>сообщения</u>.
            </span>
            <span ref={el => addToDescrRefs(el, 3)}>
              Звонки могу не увидеть и случайно пропустить.
            </span>
          </div>

          <p className="contacts__common" ref={el => addToDescrRefs(el, 4)}>
            Ниже я оставляю ссылки на основные страницы, где вы также можете
            меня найти ↓
          </p>

          <ul className="contacts__list">
            <li
              className="contacts__item"
              ref={el => addToListRefs(el, 0)}
            >
              <Link
                to="https://vk.com/psychologist_margo_matovnikova"
                target="_blank"
                className="contacts__link"
              >
                <VkIcon className="contacts__img" />
                <span className="contacts__img-descr">Вконтакте</span>
              </Link>
            </li>

            <li
              className="contacts__item"
              ref={el => addToListRefs(el, 1)}
            >
              <Link
                to="https://www.b17.ru/matovnikova/"
                target="_blank"
                className="contacts__link b17-block"
              >
                <img
                  src={b17}
                  className="contacts__img b17-block__img"
                  alt="b17"
                  loading="lazy"
                />
                <span className="contacts__img-descr">
                  b17 - Сайт психологов №1
                </span>
              </Link>
            </li>

            <li
              className="contacts__item"
              ref={el => addToListRefs(el, 2)}
            >
              <Link
                to="https://t.me/psychology_margarita"
                target="_blank"
                className="contacts__link"
              >
                <TgIcon className="contacts__img" />
                <span className="contacts__img-descr">Telegram</span>
              </Link>
            </li>

            <li
              className="contacts__item"
              ref={el => addToListRefs(el, 3)}
            >
              <Link
                to="http://instagram.com/psychology_margarita"
                target="_blank"
                className="contacts__link"
              >
                <InstagramIcon className="contacts__img" />
                <span className="contacts__img-descr">Instagram*</span>
              </Link>
            </li>
          </ul>

          <span ref={attentionRef} className="contacts__attention">
            *принадлежит компании Meta, признанной экстремистской и запрещённой
            на территории РФ
          </span>
        </div>
      </div>
    </section>
  )
}