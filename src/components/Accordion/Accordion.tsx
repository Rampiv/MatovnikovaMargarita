import type { JSX } from "react"
import { CaretRightOutlined } from "@ant-design/icons"
import "./Accordion.scss"

interface CollapseHeaderProps {
  img?: () => JSX.Element
  name: string
}

export const CollapseHeader = ({ img, name }: CollapseHeaderProps) => {
  return (
    <div className="accordion__collapse-header">
      <div className="accordion__header-img">{img && img()}</div>
      <h3 className="accordion__header-name">{name}</h3>
    </div>
  )
}

interface CollapseContentProps {
  descr: string | JSX.Element
  link: string
  linkName?: string
}

export const CollapseContent = ({ descr, link, linkName }: CollapseContentProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <div className="accordion__collapse-content">
      <div className="accordion__content-descr">{descr}</div>
      {link && (
        <button
          className="accordion__link"
          onClick={() => scrollToSection(link)}
        >
          {linkName ?? "Оплата"}
        </button>
      )}
    </div>
  )
}

export const CustomExpandIcon: React.FC<{ isActive: boolean }> = ({
  isActive,
}) => {
  return (
    <CaretRightOutlined
      style={{
        fontSize: "24px",
        color: "rgb(226, 178, 157)",
        transition: "transform 0.3s",
        transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
      }}
    />
  )
}
