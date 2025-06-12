import { useContext, useEffect } from "react"
import "./CompetencePage.scss"
import { AppContext } from "../../context/contextProvider"
import { CommonLink } from "../../components"

export const CompetencePage = () => {
  const { setRoute } = useContext(AppContext)

  useEffect(() => {
    setRoute("/competence")
  })

  return (
    <section className="competence">
      <div className="container">
        <h1 className="h1">С чем я работаю?</h1>
        <p className="competence__descr">
          Вы можете обратиться ко мне с широким спектром запросов.
        </p>
        <p className="competence__descr">Перечислю основные из них:</p>
        <ul className="competence__list">
          <li className="competence__item">
            ✔️ работа с самооценкой и неуверенностью в себе;
          </li>
          <li className="competence__item">
            ‌✔️ поиск себя и личностный рост;
          </li>
          <li className="competence__item">
            ✔️ детско-родительские отношения;
          </li>
          <li className="competence__item">
            ✔️ конфликты и трудности в отношениях (в семье, между партнерами, в
            рабочем коллективе и т.д.);
          </li>
          <li className="competence__item">
            ✔️ кризисные ситуации (расставания, потеря работы и т.д.); 
          </li>
          <li className="competence__item">✔️работа с травматичным опытом;</li>
          <li className="competence__item">
            ✔️ трудности в выражении эмоций; профориентация;
          </li>
          <li className="competence__item">✔️ эмоциональное выгорание;</li>
          <li className="competence__item">
            ✔️ работа с телом, психосоматика;
          </li>
          <li className="competence__item">
            ✔️ тревога и депрессивные состояния;
          </li>
          <li className="competence__item">
            ✔️ расстройства пищевого поведения{" "}
          </li>
        </ul>

        <CommonLink
          data={{
            link: "/payment",
            text: "Стоимость и порядок оплаты",
          }}
        />
      </div>
    </section>
  )
}
