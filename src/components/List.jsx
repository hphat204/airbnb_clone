import React from "react";
import "../scss/List.css";
function List({ tittle, list }) {
  return (
    <div className="listItem">
      <h3>{tittle.toUpperCase()}</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
