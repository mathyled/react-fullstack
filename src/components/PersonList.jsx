import React from "react";
import PersonItem from "./PersonItem";
import FilteredPersons from "./FilteredPersons";

const PersonList = ({ persons, filterName, deletePerson }) => {
  return (
    <div>
      {!filterName ? (
        <ul>
          {persons.map((person) => (
            <PersonItem key={person.id} person={person} deletePerson={deletePerson}/>
          ))}
        </ul>
      ) : (

        <FilteredPersons persons={persons} filterName={filterName} />
  
        
      )}
    </div>
  );
};

export default PersonList;
