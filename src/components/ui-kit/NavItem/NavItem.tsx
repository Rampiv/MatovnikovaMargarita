import React from "react"
import { Link } from "react-router"

interface IconProps {
  className: string
}
interface NavItemProps {
  to: string
  text: string
  Icon: React.FC<IconProps>
}

export const NavItem = React.memo(({ to, text, Icon }: NavItemProps) => {
  return (
    <li className="navigation__item">
      <Link to={to} className="navigation__link">
        <span className="navigation__text">{text}</span>
        <Icon className="navigation__icon" />
      </Link>
    </li>
  )
})
