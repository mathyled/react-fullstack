import { useState, useEffect } from "react";
import axios from "axios";
import PersonList from "./components/PersonList";
import phonebookServices from "./services/phonebook";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const baseURL = "http://localhost:3001/persons/";

  useEffect(() => {
    phonebookServices.getAll().then((response) => {
      setPersons(response);
    });
  }, []);
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
    };

    phonebookServices.createPhonebook(newContact).then((response) => {
      setPersons([...persons, response]);
    });

    // Limpiar campos del formulario
    setNewName("");
    setNewNumber("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setNewName(value);
    if (name === "number") setNewNumber(value);
  };



  const  deletePerson = (id, name) => {


    // Confirmar la acción con el usuario
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar a ${name}?`);
  
    if (!confirmDelete) {
      return; // Si el usuario cancela, no se ejecuta la eliminación
    }
  
    // Realizar la petición DELETE
    axios
      .delete(`${baseURL}?id=${id}`)
      .then(() => {
        // Actualizar la lista local de contactos
        const updatedContacts = persons.filter((person) => person.id !== id);
        setPersons(updatedContacts);
  
        console.log(`Contacto ${name} eliminado con éxito.`);
      })
      .catch((error) => {
        console.error("Error eliminando el contacto:", error);
        alert(`Hubo un problema al intentar eliminar a ${name}. Por favor, inténtalo de nuevo.`);
      });
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
      <PersonList
        persons={persons}
        filterName={filterName}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
