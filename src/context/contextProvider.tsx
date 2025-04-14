import { createContext, useState } from "react"

interface AppContextProps {
  headerVisible: boolean
  setHeaderVisible: (headerVisible: boolean) => void
  route: string
  setRoute: (route: string) => void
}

type Props = {
  children?: React.ReactElement
}

export const AppContext = createContext<AppContextProps>({
  headerVisible: false,
  setHeaderVisible: () => {},
  route: "/",
  setRoute: () => {},
})

export const AppContextProvider = ({ children }: Props) => {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [route, setRoute] = useState("")

  return (
    <AppContext.Provider
      value={{
        headerVisible,
        setHeaderVisible,
        route,
        setRoute,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
