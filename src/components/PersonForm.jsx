const PersonForm = ({handlers, values}) => {
    // console.log(values.newName);
    
  return (
    <div>
      <form onSubmit={handlers.handleSubmit}>
        <div>
          name: <input  name="name" onChange={handlers.handleInputChange} value={values.newName} />
        </div>
        <div>
          number: <input name="number" onChange={handlers.handleInputChange} value={values.newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
