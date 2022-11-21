import { useState } from "react";

const Filter = ({ newFilter, handleChange }) => (
  <div>
    Filter By Name: <input value={newFilter} onChange={handleChange} />
  </div>
);

const Add = ({
  newName,
  newNumber,
  handleAddPerson,
  handleNewNameChange,
  handleNewNumberChange,
}) => (
  <div>
    <h2>Add a new entry</h2>
    <form onSubmit={handleAddPerson} id="my_form">
      <div>
        Name:{" "}
        <input value={newName} onChange={handleNewNameChange} id="nameInput" />
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleNewNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
);

const Personslist = ({ newFilter, persons }) => {
  const personsToShow =
    newFilter === ""
      ? persons
      : persons.filter((names) =>
          names.name.toLowerCase().includes(newFilter.toLowerCase())
        );
  return (
    <div>
      <h2>Numbers</h2>
      {personsToShow.map((names) => (
        <div key={names.name}>
          {names.name}:&emsp; {names.number}
        </div>
      ))}
    </div>
  );
};

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    { name: "Gustavo Mejia", number: "319-660-81-84", id: 5 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  // console.log(newName);
  // console.log(newNumber);
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={handleFilter} />
      <Add
        newName={newName}
        newNumber={newNumber}
        handleAddPerson={addPerson}
        handleNewNameChange={handleNewName}
        handleNewNumberChange={handleNewNumber}
      />
      <Personslist persons={persons} newFilter={newFilter} />
    </div>
  );
};

export default App;
