import { Link } from "react-router"
import "./CommonLink.scss"

interface Props{
    data: {
        link: string
        text:string
    }
}
export const CommonLink = ({data}: Props) => {
  return (
    <div className="common-link">
      <Link to={data.link} className="common-link__link">
        {data.text}
      </Link>
    </div>
  )
}
