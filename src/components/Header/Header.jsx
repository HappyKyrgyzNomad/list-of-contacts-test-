import "./Header.scss";

import call from "../../media/call.svg";
import mail from "../../media/mail.svg";

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>Каталог</li>
        <li>Акции</li>
        <li>Популярные товары</li>
        <li>Новинки</li>
        <li>Новости</li>
        <li>О компании </li>
        <li>Контакты</li>
      </ul>
      <div className="header__contacts ">
        {" "}
        <div>
          {" "}
          {/* <img src={mail}></img> */}
          <a className="header__text" href="mailto: info@Kanzler.kg">
            info@Kanzler.kg
          </a>
        </div>
        <img href={call}></img>
        <a href="tel:+996221138602" className="header__text header__text--red">
          Позвонить
        </a>
      </div>
    </div>
  );
}
