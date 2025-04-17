import { createContext, useState } from "react"

interface AppContextProps {
  headerVisible: boolean
  setHeaderVisible: (headerVisible: boolean) => void
  route: string
  setRoute: (route: string) => void
  isMenuOpen: boolean
  toggleMenu: (isMenuOpen: boolean) => void
}

type Props = {
  children?: React.ReactElement
}

export const AppContext = createContext<AppContextProps>({
  headerVisible: false,
  setHeaderVisible: () => {},
  route: "/",
  setRoute: () => {},
  isMenuOpen: false,
  toggleMenu: () => {},
})

export const AppContextProvider = ({ children }: Props) => {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [route, setRoute] = useState("")
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <AppContext.Provider
      value={{
        headerVisible,
        setHeaderVisible,
        route,
        setRoute,
        isMenuOpen,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
