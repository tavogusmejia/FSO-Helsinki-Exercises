import { useState } from "react";

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    { name: "Gustavo Mejia", number: "319-660-81-84", id: 5 },
  ]);

  //console.log(persons);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  //console.log(persons.filter((names) => names.name.toLowerCase().includes(newFilter.toLowerCase())));

  const addPerson = (event) => {
    event.preventDefault();

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
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    //console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  const personsToShow =
    newFilter === ""
      ? persons
      : persons.filter((names) =>
          names.name.toLowerCase().includes(newFilter.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter By Name: <input value={newFilter} onChange={handleFilter} />
      </div>
      <h2>Add a new entry</h2>
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
      {personsToShow.map((names) => (
        <div key={names.name}>
          {names.name}:&emsp; {names.number}
        </div>
      ))}
    </div>
  );
};

export default App;
