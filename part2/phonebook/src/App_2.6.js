import { useState } from "react";

const App = (props) => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  console.log(persons);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
    };

    setPersons(persons.concat(nameObject));
    setNewName("");
  };

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((names) => (
        <div key={names.name}>{names.name}</div>
      ))}
    </div>
  );
};

export default App;
