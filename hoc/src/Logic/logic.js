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

export const withDeleteBtn = (Component) => (props) => {
  const deleteHandler = () => {
    props.setDeleteModal(props.li);
  };

  return (
    <Component
      deleteHandler={deleteHandler}
      setDeleteModal={props.setDeleteModal}
      li={props.li}
    />
  );
};
