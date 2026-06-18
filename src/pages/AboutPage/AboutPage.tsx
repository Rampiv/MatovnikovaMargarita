import { useContext, useEffect } from "react"
import { AppContext } from "../../context/contextProvider"
import { AboutSection } from "../../components"

export const AboutPage = () => {
  const { setRoute } = useContext(AppContext)

  useEffect(() => {
    setRoute("/about")
  }, [setRoute])

  return <AboutSection isButton={true} animated={true} />
}