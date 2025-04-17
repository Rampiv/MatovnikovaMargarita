import { useContext, useMemo, useRef } from "react"
import { AppContext } from "../../context/contextProvider"
import "./Header.scss"
import { Link } from "react-router"
import { HamburgerButton } from "../ui-kit"
import { useGSAP } from "@gsap/react"
import { BurgerAnimationOff, BurgerAnimationOn } from "@kit/BurgerAnimation"

export const Header = () => {
  const { route, isMenuOpen } = useContext(AppContext)

  const navigationRef = useRef(null)

  // Мемоизация класса навигации
  const navClassName = useMemo(
    () => [`navigation`, `${route !== "/" ? "" : "hide"}`].join(" ").trim(),
    [route],
  )

  // Мемоизация элементов навигации
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

  useGSAP(() => {
    isMenuOpen
      ? BurgerAnimationOn({
          elementRef: navigationRef,
        })
      : BurgerAnimationOff({
          elementRef: navigationRef,
        })
  }, [isMenuOpen])

  return (
    <nav className={navClassName}>
      <HamburgerButton />

      <ul className="navigation__list" ref={navigationRef}>
        {navItems.map(item => (
          <li className="navigation__item" key={`${item.to} ${item.text}`}>
            <Link to={item.to} className="navigation__link">
              <span className="navigation__text">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
