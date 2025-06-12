import { useContext, useEffect, useMemo } from "react"
import "./MainPage.scss"
import { AppContext } from "../../context/contextProvider"
import { Link } from "react-router"

export const MainPage = () => {
  const { setRoute } = useContext(AppContext)

  useEffect(() => {
    setRoute("/main")
  })

  const navItems = useMemo(
    () => [
      { to: "/about", text: "Обо мне" },
      {
        to: "/education",
        text: "Образование",
      },
      {
        to: "/competence",
        text: "Компетенции",
      },
      { to: "/payment", text: "Оплата" },
      { to: "/contacts", text: "Контакты" },
    ],
    [],
  )

  return (
    <section className="mainpage">
      <div className="container">
        <h1 className="h1">Рада видеть вас на моей странице!</h1>
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
        <p className="mainpage__descr">
          Для навигация{" "}
          <strong>нажмите кнопку меню в верхнем левом углу</strong> или с
          помощью блоков снизу
        </p>
        <p className="mainpage__descr">
          Если у вас останутся вопросы после просмотра сайта — буду рада
          ответить на них во время нашей первой встречи.
        </p>

        <ul className="mainpage__list">
          {navItems.map(item => (
            <li className="mainpage__item" key={`${item.to} ${item.text}`}>
              <Link to={item.to} className="mainpage__link">
                <span className="mainpage__text">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
