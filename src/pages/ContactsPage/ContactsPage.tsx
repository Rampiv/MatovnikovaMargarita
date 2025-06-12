import { useContext, useEffect } from "react"
import "./ContactsPage.scss"
import { AppContext } from "../../context/contextProvider"
import { Link } from "react-router"
import { VkIcon, TgIcon, InstagramIcon } from "@assets/icons"
import b17 from "../../assets/image/b17.webp"

export const ContactsPage = () => {
  const { setRoute } = useContext(AppContext)

  useEffect(() => {
    setRoute("/contacts")
  })

  return (
    <section className="contacts">
      <div className="container">
        <h1 className="h1">Контакты</h1>
        <div className="contacts__common">
          <span>
            Вы можете связаться со мной в мессенджерах (WhatsApp, Telegram,
            Viber) по номеру телефона:{" "}
          </span>
          <span>8-900-905-74-25</span>
        </div>

        <div className="contacts__attention">
          <span>‌Убедительно прошу отправлять сообщения.</span>
          <span>‌Звонки могу не увидеть и случайно пропустить.</span>
        </div>
        <p className="contacts__list-descr">
          ‌Ниже я оставляю ссылки на основные страницы, где вы также можете меня
          найти ↓
        </p>
        <ul className="contacts__list">
          <li className="contacts__item">
            <Link
              to={"https://vk.com/psychologist_margo_matovnikova"}
              target="_blank"
              className="contacts__link"
            >
              <VkIcon className="contacts__img" />
              <span className="contacts__img-descr">Вконтакте</span>
            </Link>
          </li>
          <li className="contacts__item">
            <Link
              to={"https://www.b17.ru/matovnikova/"}
              target="_blank"
              className="contacts__link b17-block"
            >
              <img
                src={b17}
                className="contacts__img b17-block__img"
                alt="b17"
              />
              <span className="contacts__img-descr">
                b17 - Сайт психологов №1
              </span>
            </Link>
          </li>
          <li className="contacts__item">
            <Link
              to={"https://t.me/margo_about_psy"}
              target="_blank"
              className="contacts__link"
            >
              <TgIcon className="contacts__img" />
              <span className="contacts__img-descr">Telegram</span>
            </Link>
          </li>
          <li className="contacts__item">
            <Link
              to={"http://instagram.com/psychology_margarita"}
              target="_blank"
              className="contacts__link"
            >
              <InstagramIcon className="contacts__img" />
              <span className="contacts__img-descr">Instagram*</span>
            </Link>
          </li>
        </ul>
        <span className="contacts__img-descr">
          *принадлежит компании Meta, признанной экстремистской и запрещённой на
          территории РФ
        </span>
      </div>
    </section>
  )
}
