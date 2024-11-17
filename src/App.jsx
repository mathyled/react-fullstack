import { useState, useEffect } from "react";
import axios from "axios";
import PersonList from "./components/PersonList";
import noteServices from "./services/notes";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar duplicados
    const exists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (exists) {
      alert(`${newName} ya está en la lista de contactos`);
      return;
    }

    // Agregar el nuevo contacto
    const newContact = {
      name: newName,
      number: newNumber,
      id: persons.length + 1, // Generar un id único
    };

    setPersons([...persons, newContact]);

    // Limpiar campos del formulario
    setNewName("");
    setNewNumber("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setNewName(value);
    if (name === "number") setNewNumber(value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label>filter shown with </label>
        <input
          type="text"
          placeholder="Filter by name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
      </div>
      <h2>add a new</h2>
      <PersonForm
        handlers={{ handleSubmit, handleInputChange }}
        values={{ newName, newNumber }}
      />
      <h2>Numbers</h2>
      <PersonList persons={persons} filterName={filterName} />
    </div>
  );
};

export default App;
