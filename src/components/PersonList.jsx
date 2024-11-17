import React from "react";
import PersonItem from "./PersonItem";
import FilteredPersons from "./FilteredPersons";

const PersonList = ({ persons, filterName }) => {
  return (
    <div>
      {!filterName ? (
        <ul>
          {persons.map((person) => (
            <PersonItem key={person.id} person={person} />
          ))}
        </ul>
      ) : (

        <FilteredPersons persons={persons} filterName={filterName} />
  
        
      )}
    </div>
  );
};

export default PersonList;
