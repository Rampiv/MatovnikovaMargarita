import { Route, Routes } from "react-router"
import {
  CompetencePage,
  ContactsPage,
  EducationPage,
  Greeting,
  MainPage,
  PaymentPage,
} from "./pages"
import React from "react"
import { Navigation } from "./components"
import { AppContextProvider } from "./context/contextProvider"
import "./App.scss"
import { AboutPage } from "./pages"

const GreetingMemo = React.memo(Greeting)
const MainPageMemo = React.memo(MainPage)
const NavigationMemo = React.memo(Navigation)
const AboutPageMemo = React.memo(AboutPage)
const EducationPageMemo = React.memo(EducationPage)
const CompetencePageMemo = React.memo(CompetencePage)
const PaymentPageMemo = React.memo(PaymentPage)
const ContactsPageMemo = React.memo(ContactsPage)

export default function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <>
          <NavigationMemo />
          <Routes>
            <Route path="/" element={<GreetingMemo />} />
            <Route path="/main" element={<MainPageMemo />} />
            <Route path="/about" element={<AboutPageMemo />} />
            <Route path="/education" element={<EducationPageMemo />} />
            <Route path="/competence" element={<CompetencePageMemo />} />
            <Route path="/payment" element={<PaymentPageMemo />} />
            <Route path="/contacts" element={<ContactsPageMemo />} />
          </Routes>
        </>
      </AppContextProvider>
    </div>
  )
}
