import { useEffect } from "react"
import { useLocation } from "react-router"

export const ScrollToTop = () => {
  const location = useLocation()
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }, 200)

    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [location])

  return null
}
