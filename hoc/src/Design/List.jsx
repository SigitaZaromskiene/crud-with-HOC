import { v4 as uuidv4 } from "uuid";

function List({ personList }) {
  if (personList === null) {
    return "LOADING...";
  }
  return (
    <div className="list-container">
      {personList.map((li) => (
        <div key={uuidv4()} className="list">
          <div style={{ display: "flex", gap: "20px" }}>
            <p>{li.name}</p>
            <p>{li.surname}</p>
          </div>
          <p>Total: {li.amount}</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <button className="button">Delete</button>
            <button className="button">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
