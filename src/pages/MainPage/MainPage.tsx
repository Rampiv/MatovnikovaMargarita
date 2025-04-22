import { useContext, useEffect } from "react"
import "./MainPage.scss"
import { AppContext } from "../../context/contextProvider"

export const MainPage = () => {
  const { setRoute } = useContext(AppContext)

  useEffect(() => {
    setRoute("/main")
  })
  return (
    <section className="mainpage">
      <div className="container">
        <h1 className="mainpage__h1">Рада видеть вас на моей странице!</h1>
        <p className="mainpage__descr">
          Меня зовут{" "}
          <span className="mainpage__descr-name">
            Матовникова Маргарита Вадимовна
          </span>
        </p>
        <p className="mainpage__descr">
          Этот сайт создан, чтобы вы могли заранее узнать, как я работаю и с
          какими запросами помогаю.
        </p>

        <p className="mainpage__descr">Для навигация <strong>нажмите кнопку меню в верхнем левом углу</strong></p>
 
        <p className="mainpage__descr">
          Если у вас останутся вопросы после просмотра сайта — буду рада
          ответить на них во время нашей первой встречи.
        </p>
      </div>
    </section>
  )
}
