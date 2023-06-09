import { v4 as uuidv4 } from "uuid";
import DeleteModal from "./DeleteModal";
import { withDeleteBtn } from "../Logic/logic";

const DeleteModalOpen = withDeleteBtn(DeleteModal);

function List({ personList, deleteHandler, deleteModal, setDeleteModal, li }) {
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
            <button className="button" onClick={deleteHandler}>
              Delete
            </button>
            <DeleteModalOpen
              setDeleteModal={setDeleteModal}
              deleteModal={deleteModal}
              li={li}
            />
            <button className="button">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
