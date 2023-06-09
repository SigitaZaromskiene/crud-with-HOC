function EditModal({ name, setName, surname, setSurname }) {
  return (
    <div className="form-edit">
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
      <button className="button">Edit</button>
    </div>
  );
}

export default EditModal;
