import { useContext, useEffect } from "react"
import "./AboutPage.scss"
import { AppContext } from "../../context/contextProvider"
import { CommonLink } from "../../components"

export const AboutPage = () => {
  const { setRoute } = useContext(AppContext)

  useEffect(() => {
    setRoute("/about")
  })

  const descriptionLines = [
    "Friendly.",
    "В работе ценю бережность и принятие человека таким, какой он есть.",
    "Признаю и помогаю обрести людям их уникальность.",
    "Каждый человек для меня — совершенно новая, непохожая на других исключительная история. 🌼",
    "История же моей жизни связана не только с профессией, но и сценой.",
    "На протяжении многих лет вокал был второй важнейшей стороной моей жизни после психологии, а выступления — неотъемлемой частью меня.",
    "Поэтому как никто другой могу рассказать об опыте и сложностях преодоления страха публичных выступлений.",
    "Поддерживаю и искренне верю в силы и возможности людей.",
  ]

  return (
    <section className="about">
      <div className="container">
        <h1 className="h1">Обо&nbsp;мне</h1>
        <ul className="about__list">
          {descriptionLines.map(item => {
            return <li className="about__item">{item}</li>
          })}
        </ul>
        <CommonLink data={{
          link: "/education",
          text: "Образование и деятельность"
        }} />
      </div>
    </section>
  )
}
