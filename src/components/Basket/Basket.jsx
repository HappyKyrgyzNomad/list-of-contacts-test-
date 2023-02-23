import "./Basket.scss";

export default function Basket({ products }) {
  return (
    <div className="Basket">
      <h2>Стоимсоть заказа</h2>
      <p>Товары(3)</p>
      <p>Доставка</p>
      <div>
        <h2>Итого</h2>
        <span className="Basket__price">{products}</span>
      </div>
      <button>Подтвердите заказ</button>
      <p>
        Подтверждая заказ , я принимаю условия{" "}
        <a href="www.instagram.com">пользовательского соглашения</a>
      </p>
    </div>
  );
}
