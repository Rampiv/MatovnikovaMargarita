import { useContext, useMemo, useRef, useEffect } from "react"
import { AppContext } from "../../context/contextProvider"
import "./Header.scss"
import { Link } from "react-router"
import { HamburgerButton } from "../ui-kit"
import { useGSAP } from "@gsap/react"
import { BurgerAnimationOff, BurgerAnimationOn } from "@kit/BurgerAnimation"

export const Header = () => {
  const { route, isMenuOpen, toggleMenu } = useContext(AppContext)
  const navigationRef = useRef<HTMLUListElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

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

  const insignificantItems = useMemo(
    () => [
      { to: "/", text: "↩ Котик" },
      {
        to: "/main",
        text: "↩ Приветствие",
      },
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Если меню открыто и клик был вне меню и не по кнопке гамбургера
      if (
        isMenuOpen &&
        navigationRef.current &&
        !navigationRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        toggleMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen, toggleMenu])

  return (
    <nav className={navClassName}>
      <HamburgerButton ref={hamburgerRef} />
      <ul className="navigation__list" ref={navigationRef}>
        {navItems.map(item => (
          <li className="navigation__item" key={`${item.to} ${item.text}`}>
            <Link
              to={item.to}
              className="navigation__link"
              onClick={() => toggleMenu(false)}
            >
              <span className="navigation__text">{item.text}</span>
            </Link>
          </li>
        ))}
        <li className="navigation__item">
          <ul className="navigation__list-insignificant">
            {insignificantItems.map(item => (
              <li className="navigation__item" key={`${item.to} ${item.text}`}>
                <Link
                  to={item.to}
                  className="navigation__link"
                  onClick={() => toggleMenu(false)}
                >
                  <span className="navigation__text">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}
