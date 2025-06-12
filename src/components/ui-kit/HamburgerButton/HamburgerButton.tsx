import { useContext, forwardRef } from "react"
import { AppContext } from "../../../context/contextProvider"
import "./HamburgerButton.scss"

interface HamburgerButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export const HamburgerButton = forwardRef<HTMLButtonElement, HamburgerButtonProps>(
  (props, ref) => {
    const { isMenuOpen, toggleMenu } = useContext(AppContext)

    const clickHandler = () => {
      toggleMenu(!isMenuOpen)
    }

    return (
      <button
        ref={ref}
        className={["hamburger", `${isMenuOpen ? "active" : ""}`]
          .join(" ")
          .trim()}
        aria-label="Открыть главное меню"
        onClick={clickHandler}
        {...props}
      >
        <span className="hamburger__span" />
        <span className="hamburger__span" />
        <span className="hamburger__span" />
      </button>
    )
  }
)

HamburgerButton.displayName = "HamburgerButton"