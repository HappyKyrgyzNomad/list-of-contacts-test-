import Card from "../Card/Card";
import "./Order.scss";

export default function Order() {
  return (
    <div className="order">
      <h2>Оформление заказа</h2>
      <h3>Корзина</h3>
      <Card />
      <div className="order__form">
        {" "}
        <h3>Оформление заказа</h3>
        <input className="order__fill" placeholder="  Имя"></input>{" "}
        <input className="order__fill" placeholder="  Фамилия"></input>{" "}
        <input className="order__fill" placeholder="  Телефон "></input>
        <input className="order__fill" placeholder="  E-mail"></input>
        <input
          className="order__fill"
          placeholder="Доп телефон или whatsapp"
        ></input>
      </div>
      <div className="order__radio">
        <h3>Я</h3>
        <form>
          <input
            className="check"
            type="radio"
            placeholder="Физическое лицо"
          ></input>
          <label>Физическое лицо</label>
          <br></br>
          <input
            className="check"
            type="radio"
            placeholder="Юридичиское лицо"
          ></input>
          <label>Юридическое лицо</label>
        </form>
      </div>
      <h3>Доставка</h3>
      <p>способ доставки</p>
      <input
        className="order__check"
        type="radio"
        placeholder="Физическое лицо"
      ></input>
      <label>Самовывоз</label>{" "}
      <a href="https://www.google.com/maps/place/KEKEEV+BBQ/@42.8540921,74.6283312,15z/data=!4m6!3m5!1s0x389eb76877b6eee7:0xbee3f06148595c4d!8m2!3d42.8565745!4d74.6292612!16s%2Fg%2F11r4gzgj40">
        режим работы магазина{" "}
      </a>
      <br></br>
      <input
        className="order__check"
        type="radio"
        placeholder="Физическое лицо"
      ></input>
      <label>Курьером</label>
      <a href="https://www.google.com/maps/place/KEKEEV+BBQ/@42.8540921,74.6283312,15z/data=!4m6!3m5!1s0x389eb76877b6eee7:0xbee3f06148595c4d!8m2!3d42.8565745!4d74.6292612!16s%2Fg%2F11r4gzgj40">
        Условия доставки
      </a>
      <p>Адрес доставки</p>{" "}
      <input className="order__fill" placeholder="   Страна"></input>{" "}
      <input className="order__fill" placeholder="   Город"></input>{" "}
      <input className="order__fill" placeholder="   Улица"></input>
      <input className="order__fill" placeholder="   Квартира"></input>
      <input className="order__fill" placeholder="   Дом"></input>
      <p>Указать домофон, этаж, подъезд и комментарий к адресу</p>
      <input className="order__fill" placeholder="    Комментарий"></input>
    </div>
  );
}
