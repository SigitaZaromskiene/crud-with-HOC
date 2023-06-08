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
