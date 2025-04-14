import { useContext } from "react"
import { AppContext } from "../../context/contextProvider"
import { Link } from "react-router"
import './Header.scss'

export const Header = () => {
  const { route } = useContext(AppContext)

  return (
      <nav
        className={[`navigation`, `${route !== "/" ? "" : "hide"}`]
          .join(" ")
          .trim()}
      >
        <ul className="navigation__list">
          <Link to={"/about"} className="navigation__item">
            Обо мне
          </Link>
          <Link to={"/education"} className="navigation__item">
            Образование
          </Link>
          <Link to={"/competence"} className="navigation__item">
            Компетенции
          </Link>
          <Link to={"/payment"} className="navigation__item">
            Оплата
          </Link>
          <Link to={"/contacts"} className="navigation__item">
            Контакты
          </Link>
        </ul>
      </nav>
  )
}
