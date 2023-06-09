import "./App.scss";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { withCreateForm, withDeleteBtn } from "./Logic/logic";
import Form from "./Design/Form";
import List from "./Design/List";
import { read, create, destroy, edit } from "./localStorage";
import DeleteModal from "./Design/DeleteModal";

function App() {
  const KEY = "Labas";

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [personDetails, setPersonDetails] = useState(null);
  const [personList, setPersonList] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  const [editModal, setEditModal] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    setPersonList(read(KEY));
  }, [lastUpdate]);

  useEffect(() => {
    if (personDetails === null) {
      return;
    }
    create(KEY, personDetails);
    setLastUpdate(Date.now());
  }, [personDetails]);

  useEffect(() => {
    if (deleteData === null) {
      return;
    }
    destroy(KEY, deleteData.id);
    setLastUpdate(Date.now());
  }, [deleteData]);

  useEffect(() => {
    if (editData === null) {
      return;
    }
    edit(KEY, editData, editData.id);
    setLastUpdate(Date.now());
  }, [editData]);

  const FormCreateWithFormHandler = withCreateForm(Form);

  return (
    <div className="container">
      <div className="content">
        <FormCreateWithFormHandler
          name={name}
          surname={surname}
          setName={setName}
          setSurname={setSurname}
          setPersonDetails={setPersonDetails}
        ></FormCreateWithFormHandler>
        <List
          personList={personList}
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          setDeleteData={setDeleteData}
          setEditData={setEditData}
          setEditModal={setEditModal}
          editModal={editModal}
          name={name}
          surname={surname}
          setSurname={setSurname}
          setName={setName}
          setPersonDetails={setPersonDetails}
          setPersonList={setPersonList}
        />
      </div>
    </div>
  );
}

export default App;
