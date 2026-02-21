import { InstagramIcon, TgIcon, VkIcon } from "@assets/icons"
import b17 from "@assets/icons/b17.webp"
import { Link } from "react-router"
import "./ContactsSection.scss"

export const ContactsSection = () => {
  return (
    <section className="contacts section-common">
      <div className="container">
        <div className="section__container">
          <h1 className="h2-common contacts__h2">Контакты</h1>

          <div className="contacts__common">
            <span>
              Вы можете связаться со мной в мессенджерах (WhatsApp, Telegram) по
              номеру телефона:
            </span>
            <span>8-900-905-74-25</span>
          </div>

          <div className="contacts__common">
            <span>
              Убедительно прошу отправлять <u>сообщения</u>.
            </span>
            <span>Звонки могу не увидеть и случайно пропустить.</span>
          </div>

          <p className="contacts__common">
            Ниже я оставляю ссылки на основные страницы, где вы также можете
            меня найти ↓
          </p>

          <ul className="contacts__list">
            <li className="contacts__item">
              <Link
                to="https://vk.com/psychologist_margo_matovnikova"
                target="_blank"
                className="contacts__link"
              >
                <VkIcon className="contacts__img" />
                <span className="contacts__img-descr">Вконтакте</span>
              </Link>
            </li>

            <li className="contacts__item">
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

            <li className="contacts__item">
              <Link
                to="https://t.me/margo_about_psy"
                target="_blank"
                className="contacts__link"
              >
                <TgIcon className="contacts__img" />
                <span className="contacts__img-descr">Telegram</span>
              </Link>
            </li>

            <li className="contacts__item">
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

          <span className="contacts__attention">
            *принадлежит компании Meta, признанной экстремистской и запрещённой
            на территории РФ
          </span>
        </div>
      </div>
    </section>
  )
}
