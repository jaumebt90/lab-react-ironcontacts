// src/App.js
import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  //It.1 Display 5 contacts
  const [contacts, setContacts] = useState(contactsData.splice(0, 5));

  //It.3 Add Random Contact
  const randomContact = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];

    setContacts([...contacts, newContact]);
  };

  //It.4 Sort Name & Popularity
  const sortByName = () => {
    const sortedNames = contacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts([...sortedNames]);
  };

  const sortByPopularity = () => {
    const sortedPopularity = contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts([...sortedPopularity]);
  };

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={randomContact}> Add Random Contact</button>
      <button onClick={sortByName}> Sort by name</button>
      <button onClick={sortByPopularity}> Sort by Popularity</button>

      <div>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
          {contacts.map((contact) => (
            <tr>
              <td>
                <img src={contact.pictureUrl} class="image" alt="images"></img>
              </td>
              <td>{contact.name}</td>
              <td>{Math.round(contact.popularity * 100) / 100}</td>
              <td>{contact.wonOscar ? "🏆 " : ""}</td>
              <td>{contact.wonEmmy ? "🏆 " : ""}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default App;
