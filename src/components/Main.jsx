import React, { useState } from "react";
import dummyContacts from "../dummyData";
import {ContactList} from './'
const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  {
    contacts.map((contact) => {
      return contact.name;
    });
  }
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <contactList contacts = {contacts}>

        </contactList>
      </div>
    </div>
  );
  
};

export default Main;
