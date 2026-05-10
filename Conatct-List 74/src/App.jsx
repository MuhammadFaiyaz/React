import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactCard from "./components/ContactCard";

const App = () => {
  const [contacts, setContacts] = useState([]);
  return (
    <div className="min-h-screen bg-slate-900 p-6 flex gap-30 items-center">
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <div className="mt-6 flex flex-col gap-4">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
