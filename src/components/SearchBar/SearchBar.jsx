import "./SearchBar.scss";
import logo from "../../media/logo.png";
import arrow from "../../media/arrow.svg";
import search from "../../media/search.svg";
import bin from "../../media/bin.svg";
import profile from "../../media/profile.svg";
import option from "../../media/option.svg";

export default function SearchBar() {
  return (
    <div>
      <div className="search">
        <div className="rectangle"></div>
        <img className="logo" src={logo}></img>
        <div className="search__div">
          {/* <img src={option} alt="sdvgsdgs" /> */}
          <span>Каталог</span>
          {/* <img src={arrow}></img> */}
        </div>

        <input placeholder="Найти товар"></input>
        <div className="search__box">
          <img src={bin}></img>
        </div>
        <div className="search__box">
          <img src={profile}></img>
        </div>
      </div>
      <div className="links">
        <p>Главная</p>
        <p>/Корзина/</p> <p>Оформление заказа</p>
      </div>
    </div>
  );
}
