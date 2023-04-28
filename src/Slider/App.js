import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./App.css";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState("1");
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Review
        </h2>
      </div>
      <div className="section-center">
        {people.map((person) => {
          const { id, image, name, title, quote } = person;
          return (
            <article className="article" key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
      </div>
      <div className="btn">
        <button className="prev" onClick={() => setIndex(index)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
