import { useContext, useEffect } from "react"
import { AppContext } from "../../context/contextProvider"
import { ContactsSection } from "../../components"

export const ContactsPage = () => {
  const { setRoute } = useContext(AppContext)

  useEffect(() => {
    setRoute("/contacts")
  }, [setRoute])

  return <ContactsSection />
}
