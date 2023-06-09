export const withCreateForm = (Component) => (props) => {
  //   const surnameHandler = (e) => {
  //     props.setName(e.target.value);
  //     console.log(e.target.value);
  //   };

  //   const nameHandler = (e) => {
  //     props.setSurname(e.target.value);
  //   };

  const formHandler = () => {
    props.setPersonDetails({
      name: props.name,
      surname: props.surname,
      amount: 0,
    });
  };

  return (
    <Component
      formHandler={formHandler}
      setSurname={props.setSurname}
      setName={props.setName}
      setPersonDetails={props.setPersonDetails}
      name={props.name}
      surname={props.surname}
    ></Component>
  );
};

export const withDeleteAcc = (Component) => (props) => {
  const deleteAccHandler = () => {
    props.setDeleteData(props.li);
  };

  const deleteModal = () => {
    props.setDeleteModal(null);
  };

  return (
    <Component
      deleteAccHandler={deleteAccHandler}
      setDeleteData={props.setDeleteData}
      deleteModal={deleteModal}
    />
  );
};

export const withEditAcc = (Component) => (props) => {
  const editListHandler = () => {
    props.setEditData({
      name: props.name,
      surname: props.surname,
      id: props.editModal.id,
    });
    props.setEditModal(null);
  };

  return (
    <Component
      setEditModal={props.setEditModal}
      editListHandler={editListHandler}
      setEditData={props.setEditData}
      editModal={props.editModal}
      name={props.name}
      surname={props.surname}
      setName={props.setName}
      setSurname={props.setSurname}
    />
  );
};
