import "./Card.scss";
import pen from "../../media/pen.svg";
import pens from "../../media/pens.svg";
import pens1 from "../../media/pens1.svg";
import { useState } from "react";
import Basket from "../Basket/Basket";

export default function Card() {
  const products = [
    {
      img: pen,
      name: "loremipsum",
      artitcle: "lorem",
      quantity: 0,
      price: 420,
      id: 1,
    },
    {
      img: pens,
      name: "loremipsum",
      artitcle: "lorem",
      quantity: 0,
      price: 420,
      id: 2,
    },
    {
      img: pens1,
      name: "loremipsum",
      artitcle: "lorem",
      quantity: 0,
      price: 10000,
      id: 3,
    },
  ];
  const [quantities, setQuantities] = useState(
    products.map((product) => product.quantity)
  );
  const [productss, setProductss] = useState([...products]);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(totalPrice);
  const increase = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
    const newTotalPrice = totalPrice + productss[index].price;
    setTotalPrice(newTotalPrice);
  };

  const decrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
    const newTotalPrice = totalPrice - productss[index].price;
    setTotalPrice(newTotalPrice);
  };

  const removeProduct = (index) => {
    const newProducts = [...productss];
    newProducts.splice(index, 1);
    setProductss(newProducts);
  };
  console.log(productss);

  return (
    <div>
      <div className="card">
        <ul>
          <li> Фото</li>
          <li>Название</li> <li>Артикул</li> <li>Кол-во</li>
          <li>Цена</li>
        </ul>{" "}
        {productss.map((data, index) => (
          <div className="card__products" key={data.id}>
            <img key={data.index} src={data.img} alt="dasd"></img>
            <p className="card__name">{data.name}</p>
            <p className="card__article">{data.artitcle}</p>
            <form className="card__quantity">
              <div
                className="value-button"
                id="decrease"
                onClick={() => decrease(index)}
                value={quantities[index]}
                onChange={console.log("e")}
                // onClick={() => decrease()}
                // value={quantities}
              >
                -
              </div>
              <input
                key={data.index}
                type="number"
                id="number"
                defaultValue={quantities[index]}
              />
              <div
                key={index}
                className="value-button"
                id="increase"
                onClick={() => increase(index)}
                defaultValue="Increase Value"
              >
                +
              </div>
            </form>
            <p className="card__price">{data.price}</p>
            <button onClick={() => removeProduct(index)} className="remove">
              x
            </button>
          </div>
        ))}
      </div>
      <Basket products={totalPrice} />
    </div>
  );
}
