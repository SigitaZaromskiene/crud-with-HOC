function Form({ formHandler, name, surname, setSurname, setName }) {
  return (
    <div className="form">
      <div>
        <label>Name</label>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Surname</label>
        <input
          value={surname}
          type="text"
          onChange={(e) => setSurname(e.target.value)}
        ></input>
      </div>
      <button className="button" onClick={formHandler}>
        Submit
      </button>
    </div>
  );
}
export default Form;
