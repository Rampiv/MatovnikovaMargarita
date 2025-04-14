import { Route, Routes } from "react-router"
import { Greeting, MainPage } from "./pages"
import React from "react"
import { Header } from "./components"
import { AppContextProvider } from "./context/contextProvider"
import './App.scss'

const GreetingMemo = React.memo(Greeting)
const MainPageMemo = React.memo(MainPage)
const HeaderMemo = React.memo(Header)

export default function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <>
          <HeaderMemo />
          <Routes>
            <Route path="/" element={<GreetingMemo />} />
            <Route path="/main" element={<MainPageMemo />} />
          </Routes>
        </>
      </AppContextProvider>
    </div>
  )
}
