import { useContext, useEffect } from "react"
import { AppContext } from "../../context/contextProvider"
import { AboutSection } from "../../components"

export const AboutPage = () => {
  const { setRoute } = useContext(AppContext)

  useEffect(() => {
    setRoute("/about")
  })

  return <AboutSection isButton={true} />
}
