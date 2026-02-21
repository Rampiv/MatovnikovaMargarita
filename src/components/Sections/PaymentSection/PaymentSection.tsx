import "./PaymentSection.scss"

export const PaymentSection = () => {
  return (
    <section className="payment section-common paymentAnim" id="payment">
      <div className="container">
        <div className="section__container">
          <h2 className="h2-common paymentH2Anim">Стоимость и порядок оплаты</h2>
          <div className="payment__content">
            <p className="payment__text payment__text_margin">
              Длительность консультации — <b>55</b> минут.
            </p>
            <p className="payment__text">
              Очная встреча (г. Рязань) — <b>3500</b> р
            </p>
            <p className="payment__text payment__text_margin">
              Онлайн встреча — <b>3500</b> р
            </p>
            <p className="payment__text">
              Парная консультация с партнером – <b>5000</b> р
            </p>
            <p className="payment__text payment__text_margin">
              Длительность — <b>1 час 20 минут</b>
            </p>
            <p className="payment__text payment__text_margin">
              Если вам важно со мной познакомиться и услышать вживую – мы можем
              устроить небольшой 10-15 минутный созвон, чтобы задать друг другу
              интересующие вопросы и договориться о формате работы.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
