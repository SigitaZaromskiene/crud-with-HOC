import { v4 as uuidv4 } from "uuid";
import DeleteModal from "./DeleteModal";
import { withDeleteAcc, withEditAcc } from "../Logic/logic";
import EditModal from "./EditModal";

const DeleteAcc = withDeleteAcc(DeleteModal);

const EditModalwithEditFunctions = withEditAcc(EditModal);

function List({
  personList,
  deleteHandler,
  deleteModal,
  setDeleteModal,
  setDeleteData,
  editModalHandler,
  setEditModal,
  setEditData,
  editModal,
  name,
  surname,
  setName,
  setSurname,
}) {
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
            <button className="button" onClick={() => setDeleteModal(li)}>
              Delete
            </button>
            {deleteModal && deleteModal.id === li.id ? (
              <DeleteAcc
                setDeleteModal={setDeleteModal}
                deleteModal={deleteModal}
                deleteHandler={deleteHandler}
                setDeleteData={setDeleteData}
                li={li}
              />
            ) : null}{" "}
            <button className="button" onClick={() => setEditModal(li)}>
              Edit
            </button>
            {editModal && editModal.id === li.id ? (
              <EditModalwithEditFunctions
                setEditModal={setEditModal}
                setEditData={setEditData}
                li={li}
                name={name}
                surname={surname}
                setName={setName}
                setSurname={setSurname}
              />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
