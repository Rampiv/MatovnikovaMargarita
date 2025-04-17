import { useContext } from "react"
import { AppContext } from "../../../context/contextProvider"
import "./HamburgerButtom.scss"

export const HamburgerButton = () => {
  const { isMenuOpen, toggleMenu } = useContext(AppContext)

  const clickHandler = () => {
    toggleMenu(!isMenuOpen)
  }

  return (
    <button
      className={["hamburger", `${isMenuOpen ? "active" : ""}`]
        .join(" ")
        .trim()}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <span className="hamburger__span" />
      <span className="hamburger__span" />
      <span className="hamburger__span" />
    </button>
  )
}
