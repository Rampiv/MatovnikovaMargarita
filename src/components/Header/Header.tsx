import { useContext, useMemo, useRef, useEffect, useState } from "react"
import { AppContext } from "../../context/contextProvider"
import "./Header.scss"
import { Link } from "react-router"
import { HamburgerButton } from "../ui-kit"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BurgerAnimationOff, BurgerAnimationOn } from "@kit/BurgerAnimation"

gsap.registerPlugin(ScrollTrigger)

const navItems = [
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
]

const insignificantItems = [
  { to: "/", text: "↩ Котик" },
  {
    to: "/main",
    text: "↩ Приветствие",
  },
]

export const Header = () => {
  const { route, isMenuOpen, toggleMenu } = useContext(AppContext)
  const navigationRef = useRef<HTMLUListElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  const [isScrolled, setIsScrolled] = useState(false)

  // Мемоизация класса навигации
  const navClassName = useMemo(
    () => [`navigation`, `${route !== "/" ? "" : "hide"}`].join(" ").trim(),
    [route],
  )

  // Эффект для отслеживания скролла
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollPosition > 50) // Изменяем состояние при скролле > 50px
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useGSAP(() => {
    isMenuOpen
      ? BurgerAnimationOn({
          elementRef: navigationRef,
        })
      : BurgerAnimationOff({
          elementRef: navigationRef,
        })
  }, [isMenuOpen])

  useGSAP(() => {
    if (hamburgerRef.current) {
      gsap.to(hamburgerRef.current, {
        opacity: isScrolled ? 0 : 1,
        display: isScrolled ? "none" : "block",
        duration: 0.3,
        ease: "power2.inOut",
      })
    }
  }, [isScrolled])

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
