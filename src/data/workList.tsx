import { IndividualImg } from "@assets/icons/IndividualImg"
import { GroupImg } from "@assets/icons/GroupImg"
import { TraningImg } from "@assets/icons/TraningImg"
import { FamilyImg } from "@assets/icons/FamilyImg"

export const workList = [
  {
    img: IndividualImg,
    name: "Индивидуальное консультирование",
    descr: (
      <>
        <p className="accordion__descr-text">
          Формат один на один, где вы сможете:
        </p>
        <ul className="accordion__descr-list">
          <li>• разобраться в сложных жизненных периодах</li>
          <li>• снизить тревогу и эмоциональное напряжение</li>
          <li>• прожить кризис (материнство, развод, утрата)</li>
          <li>• справиться с выгоранием</li>
          <li>• укрепить самооценку</li>
          <li>• научиться выстраивать границы</li>
          <li>• лучше понимать свои чувства и потребности</li>
          <li>• перестать повторять разрушительные сценарии</li>
        </ul>
        <p className="accordion__descr-text">
          Также я работаю с тревожными и депрессивными состояниями,
          последствиями травматического опыта, расстройствами пищевого поведения
          и многими другими темами.
        </p>
      </>
    ),
    link: "payment",
  },
  {
    img: FamilyImg,
    name: "Семейная терапия",
    descr: (
      <>
        <p className="accordion__descr-text">Формат совместной работы для:</p>
        <ul className="accordion__descr-list">
          <li>• супругов</li>
          <li>• партнёров</li>
          <li>• родителей и взрослых детей (14+ до ∞)</li>
        </ul>
        <p className="accordion__descr-text">Семейная терапия помогает:</p>
        <ul className="accordion__descr-list">
          <li>• наладить коммуникацию</li>
          <li>
            • увидеть, как устроена система отношений и как её можно изменить
          </li>
          <li>• снизить уровень конфликтов</li>
          <li>• услышать друг друга</li>
          <li>• восстановить эмоциональную близость</li>
          <li>• научиться прямо говорить о сложном</li>
        </ul>
      </>
    ),
    link: "payment",
  },
  {
    img: GroupImg,
    name: "Групповая терапия",
    descr: (
      <>
        <p className="accordion__descr-text">
          В этом разделе будут публикуются даты и анонсы планируемых групп
        </p>
      </>
    ),
    link: "",
  },
  {
    img: TraningImg,
    name: "Мастерские и тренинги",
    descr: (
      <>
        <p className="accordion__descr-text">
          Я провожу психологические мастерские.{" "}
        </p>
        <p className="accordion__descr-text">
          Темы подбираются индивидуально под запрос аудитории.
        </p>
        <p className="accordion__descr-text">
          Вы можете заказать мероприятие для вашего сообщества/компании.
        </p>
      </>
    ),
    link: "",
  },
]
