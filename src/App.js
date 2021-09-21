// src/App.js
import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  return (
    <div className="App">
      <h2>IronContacts</h2>

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
