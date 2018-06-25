import * as React from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import logo from "./logo.svg";



const contacts = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" }
];

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Contact Manager</h1>
        </header>

        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
