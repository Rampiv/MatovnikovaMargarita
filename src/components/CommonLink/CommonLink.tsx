import { Link } from "react-router"
import "./CommonLink.scss"
import type { RefObject } from "react"

interface Props {
  data: {
    link: string
    text: string
  }
  linkRef: RefObject<HTMLDivElement>
}
export const CommonLink = ({ data, linkRef }: Props) => {
  return (
    <div className={"common-link"} ref={linkRef}>
      <Link to={data.link} className="common-link__link">
        {data.text}
      </Link>
    </div>
  )
}
