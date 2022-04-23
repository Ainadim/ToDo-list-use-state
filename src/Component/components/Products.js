import React from "react";
import { useState } from "react";
import "./Products.css";

const Products = () => {
  const [todo, todoList] = useState("");
  const [name, nameList] = useState([]);

  const dataInput = (e) => {
    todoList(e.target.value);
  };

  const dataShow = (x) => {
    nameList([...name, { item: todo }]);
    todoList(" ");
  };
  return (
    <div className="App-header">
      <div className="text-button">
        <input
          id="input-box"
          type="text"
          placeholder="Write Your Name"
          value={todo}
          onChange={dataInput}
        />
        <button id="submit-box" onClick={dataShow}>
          SUBMIT
        </button>
      </div>
      <div className="name-list">
        <h2>Name List</h2>
        <ol>
          {name.map((itemName) => {
            return <li>{itemName.item}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Products;
