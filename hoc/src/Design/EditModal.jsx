import { useState } from "react";

function EditModal({ editListHandler, editModal }) {
  console.log(editModal);
  const [name, setName] = useState(editModal.name);
  const [surname, setSurname] = useState(editModal.surname);
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
      <button onClick={editListHandler} className="button">
        Edit
      </button>
    </div>
  );
}

export default EditModal;
