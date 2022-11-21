import { useState } from "react";

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
  ]);

  console.log(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  
  const addPerson = (event) => {
    event.preventDefault();
    console.log(persons.includes({ newName }));

    if (newName === "" || newNumber === "") {
      alert(`Please write a Name and a Number to be added to phonebook`);
      return;
    }

    if (persons.some((name) => name.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          debug: {newName}
          {newNumber}
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((names) => (
        <div key={names.name}>
          {names.name}:&emsp; {names.number}
        </div>
      ))}
    </div>
  );
};

export default App;
