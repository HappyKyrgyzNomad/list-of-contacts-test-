import "./SearchBar.scss";
import logo from "../../media/logo.png";

import bin from "../../media/bin.svg";
import profile from "../../media/profile.svg";

export default function SearchBar() {
  return (
    <div>
      <div className="search">
        <div className="rectangle"></div>
        <img className="logo" src={logo} alt="hjksdfhlk"></img>
        <div className="search__div">
          <span>Каталог</span>
        </div>

        <input placeholder="Найти товар"></input>
        <div className="search__box">
          <img src={bin} alt="ewrhewu"></img>
        </div>
        <div className="search__box">
          <img src={profile} alt="askjfkj"></img>
        </div>
      </div>
      <div className="links">
        <p>Главная</p>
        <p>/Корзина/</p> <p>Оформление заказа</p>
      </div>
    </div>
  );
}
