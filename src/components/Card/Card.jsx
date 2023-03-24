import { useState, useEffect } from "react";
import "./Card.scss";

export default function Card() {
  //cостояния
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [search, setSearch] = useState("");

  //расширятель
  const toggle = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !expanded[index];
    setExpanded(newExpanded);
  };
  //редактор
  const edit = (index, newData) => {
    const newDataArray = [...data];
    newDataArray[index] = { ...newDataArray[index], ...newData };
    setData(newDataArray);
  };

  const handleEdit = (itemId, newName, newPhone) => {
    const updatedItems = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, name: newName };
      } else {
        return item;
      }
    });

    setData(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  //  память браузера
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));

    if (storedItems) {
      setData(storedItems);
      setExpanded(new Array(storedItems.length).fill(false));
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setExpanded(new Array(json.length).fill(false));
        });
    }
  }, []);

  //удалить контакт
  const remover = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    const updatedSortedData = updatedData.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setData(updatedSortedData);
  };

  return (
    <div className="card">
      <h1> Контакты</h1>

      <input
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        type="text"
        placeholder="поиск... "
      />
      {data
        .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((item, index) => (
          <div key={item.index} item={item}>
            <button>
              <h1 onClick={() => toggle(index)} className="card__name">
                {item.name} <p className="card__number">{item.phone} </p>
              </h1>
            </button>

            {editedIndex === index ? (
              <div className="card__edit">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    edit(index, { ...item, name: e.target.value })
                  }
                />{" "}
                <input
                  type="text"
                  value={item.phone}
                  onChange={(e) =>
                    edit(index, { ...item, phone: e.target.value })
                  }
                />
                <button
                  className="btn --canc"
                  onClick={() => setEditedIndex(null)}
                >
                  отменить
                </button>
                <button
                  className="btn --done"
                  onClick={() => {
                    handleEdit(item.id, item.name, item.phone);
                    setEditedIndex(null);
                  }}
                >
                  готово
                </button>
              </div>
            ) : (
              <div
                className={expanded[index] ? "card__expanded" : "card__more"}
              >
                {" "}
                <p className="card__email">Email:{item.email}</p>{" "}
                <p className="card__company">Company:{item.company.name}</p>
                <p>City:{item.address.city}</p>
                <p>Street:{item.address.street}</p>
                <p>Suite:{item.address.suite}</p>
                <p>Zip-code:{item.address.zipcode}</p>
                <p>Website:{item.website} </p>
                <button
                  className=" btn --edit"
                  onClick={() => setEditedIndex(index)}
                >
                  редактировать
                </button>{" "}
                <button className=" btn --del" onClick={() => remover(item.id)}>
                  удалить
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
