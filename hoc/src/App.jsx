import "./App.scss";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { withCreateForm } from "./Logic/logic";
import Form from "./Design/Form";
import List from "./Design/List";
import { read, create } from "./localStorage";

function App() {
  const KEY = "Labas";

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [personDetails, setPersonDetails] = useState(null);
  const [personList, setPersonList] = useState(null);

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
        <List personList={personList} />
      </div>
    </div>
  );
}

export default App;
