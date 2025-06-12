import { useContext, useEffect } from "react"
import "./PaymentPage.scss"
import { AppContext } from "../../context/contextProvider"
import { CommonLink } from "../../components"

export const PaymentPage = () => {
  const { setRoute } = useContext(AppContext)

  useEffect(() => {
    setRoute("/payment")
  })

  return (
    <section className="payment">
      <div className="container">
        <h1 className="h1">Оплата</h1>
        <ul className="payment__list">
          <li className="payment__item">
            <div className="payment__personal">
              <span>
                Очная встреча (г. Рязань) — <strong>3000 р</strong>
              </span>
              <span>
                Онлайн встреча — <strong>3000 р</strong>
              </span>
              <span>
                Длительность консультации — <strong>55 минут.</strong>
              </span>
            </div>
          </li>
          <li className="payment__item">
            <div className="payment__couples">
              <span>
                Парная консультация с партнером — <strong>4000 р</strong>
              </span>
              <span>
                Длительность — <strong>1 час 20 минут</strong>
              </span>
            </div>
          </li>
          <li className="payment__item">
            Для новых клиентов я предлагаю бесплатный 10-15-минутный созвон, на
            котором мы можем с Вами познакомиться, побыть в контакте, задать
            друг другу интересующие вопросы и договориться о формате работы.
          </li>
          <li className="payment__item">
            <div className="payment__attention">
              <span><u>Обратите внимание:</u></span>
              <span>
                Стоимость консультаций может корректироваться с учётом повышения
                квалификации и изменений нагрузки
              </span>
            </div>
          </li>
        </ul>

        <CommonLink
          data={{
            link: "/contacts",
            text: "Где можно со мной связаться?",
          }}
        />
      </div>
    </section>
  )
}
