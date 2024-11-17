const PersonItem = ({ person, deletePerson }) => (
  <>
    <li>
      {person.name} {person.number}
    </li>
    <button onClick={()=> deletePerson(person.id, person.name)}>delete</button>
  </>
    
  );

export default PersonItem;