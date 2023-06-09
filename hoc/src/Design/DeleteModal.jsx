import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

function DeleteModal({ li, setDeleteModal, deleteAccHandler, deleteModal }) {
  return (
    <div
      className="modal"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontSize: "20px",
        }}
      >
        Are you sure?
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={faCheck} onClick={deleteAccHandler} />
        <FontAwesomeIcon icon={faXmark} onClick={deleteModal} />
      </div>
    </div>
  );
}

export default DeleteModal;
