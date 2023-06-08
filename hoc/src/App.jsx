import "./App.scss";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { withCreateForm } from "./Logic/logic";
import Form from "./Design/Form";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [personDetails, setPersonDetails] = useState(null);

  const FormCreateWithFormHandler = withCreateForm(Form);

  console.log(personDetails);
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
      </div>
    </div>
  );
}

export default App;
