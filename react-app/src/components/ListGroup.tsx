// still following the pascal convention

// import { Fragment } from "react";

function ListGroup() {
  const items = ["Nairobi", "Mombasa", "Wote", "Kisumu", "Mandera"];
  return (
    <>
      <h1>Nav Heading</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
