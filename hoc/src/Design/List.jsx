function List({ personList }) {
  <div className="list-container">
    {personList.map((li) => (
      <div className="list">
        <p>{li.name}</p>
        <p>{li.surname}</p>
        <p>{li.amount}</p>
      </div>
    ))}
  </div>;
}

export default List;
