import { useContext, useEffect, useRef } from "react"
import "./ContactsPage.scss"
import { AppContext } from "../../context/contextProvider"
import { Link } from "react-router"
import { VkIcon, TgIcon, InstagramIcon } from "@assets/icons"
import b17 from "../../assets/image/b17.webp"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ContentAnimation } from "@kit/ContentAnimation"

gsap.registerPlugin(useGSAP)

export const ContactsPage = () => {
  const { setRoute } = useContext(AppContext)

  const containerRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const commonRef = useRef<HTMLDivElement>(null)
  const attentionRef = useRef<HTMLDivElement>(null)
  const listDescrRef = useRef<HTMLParagraphElement>(null)
  const listItemsRef = useRef<HTMLLIElement[]>([])
  const metaWarningRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setRoute("/contacts")
  }, [setRoute])

  useGSAP(
    () => {
      ContentAnimation({
        h1Ref,
        listItemsRef,
        additionalRefs: [
          commonRef.current,
          attentionRef.current,
          listDescrRef.current,
          metaWarningRef.current,
        ],
      })
    },
    { scope: containerRef },
  )

  const addToListRefs = (el: HTMLLIElement | null, index: number) => {
    if (el) listItemsRef.current[index] = el
  }

  return (
    <section className="contacts">
      <div className="container" ref={containerRef}>
        <h1 className="h1" ref={h1Ref}>
          Контакты
        </h1>

        <div className="contacts__common" ref={commonRef}>
          <span>
            Вы можете связаться со мной в мессенджерах (WhatsApp, Telegram,
            Viber) по номеру телефона:{" "}
          </span>
          <span>8-900-905-74-25</span>
        </div>

        <div className="contacts__attention" ref={attentionRef}>
          <span>Убедительно прошу отправлять сообщения.</span>
          <span>Звонки могу не увидеть и случайно пропустить.</span>
        </div>

        <p className="contacts__list-descr" ref={listDescrRef}>
          Ниже я оставляю ссылки на основные страницы, где вы также можете меня
          найти ↓
        </p>

        <ul className="contacts__list">
          <li className="contacts__item" ref={el => addToListRefs(el, 0)}>
            <Link
              to="https://vk.com/psychologist_margo_matovnikova"
              target="_blank"
              className="contacts__link"
            >
              <VkIcon className="contacts__img" />
              <span className="contacts__img-descr">Вконтакте</span>
            </Link>
          </li>

          <li className="contacts__item" ref={el => addToListRefs(el, 1)}>
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

          <li className="contacts__item" ref={el => addToListRefs(el, 2)}>
            <Link
              to="https://t.me/margo_about_psy"
              target="_blank"
              className="contacts__link"
            >
              <TgIcon className="contacts__img" />
              <span className="contacts__img-descr">Telegram</span>
            </Link>
          </li>

          <li className="contacts__item" ref={el => addToListRefs(el, 3)}>
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

        <span className="contacts__img-descr" ref={metaWarningRef}>
          *принадлежит компании Meta, признанной экстремистской и запрещённой на
          территории РФ
        </span>
      </div>
    </section>
  )
}
