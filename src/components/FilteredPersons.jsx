import PersonItem from "./PersonItem";




const FilteredPersons = ({ persons, filterName }) => {
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(filterName.toLowerCase())
    );
    return (
        <ul>
          {filteredPersons.map((person) => (
            <PersonItem key={person.id} person={person} />
          ))}
        </ul>
      );
    };
    
export default FilteredPersons;