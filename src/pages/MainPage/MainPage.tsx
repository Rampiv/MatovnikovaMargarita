import { useContext, useEffect } from "react"
import "./MainPage.scss"
import { AppContext } from "../../context/contextProvider"

export const MainPage = () => {
     const { setRoute } = useContext(AppContext)
     
    useEffect(()=>{
        setRoute('/main')
    })
  return <div>да, епт</div>
}
