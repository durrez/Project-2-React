import { useMemo, useState } from "react";
import { BookUser, Users } from "lucide-react"; 
import ContactForm from "./components/ContactForm";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";

const starterContacts = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com", phone: "555-0123" },
  { id: 2, name: "Durrez Ahmad", email: "durrez@gmail.com", phone: "555-0188" }
];

export default function App() {
  const [contacts, setContacts] = useState(starterContacts);
  const [search, setSearch] = useState("");

  function addContact(contact) {
    setContacts((current) => [
      ...current,
      { ...contact, id: crypto.randomUUID() }
    ]);
  }

  function deleteContact(id) {
    setContacts((current) => current.filter((contact) => contact.id !== id));
  }

  const filteredContacts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return contacts;

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(query) ||
        contact.email.toLowerCase().includes(query)
    );
  }, [contacts, search]);

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="brand-icon" aria-hidden="true">
          <BookUser size={30} />
        </div>
        <div>
          <h1>Contact Book</h1>
          <p className="subtitle">
            Add, search, and manage your contacts in one place.
          </p>
        </div>
      </header>

      <main className="layout">
        <section className="card form-card">
          <div className="section-heading">
            <h2>Add a contact</h2>
            <p>Enter the contact's details below.</p>
          </div>
          <ContactForm onAddContact={addContact} />
        </section>

        <section className="card contacts-card">
          <div className="contacts-header">
            <div className="section-heading">
              <h2>Contacts</h2>
              <p>
                {contacts.length} {contacts.length === 1 ? "contact" : "contacts"} saved
              </p>
            </div>
            <div className="count-badge" aria-label={`${contacts.length} contacts`}>
              <Users size={17} />
              {contacts.length}
            </div>
          </div>

          <SearchBar value={search} onChange={setSearch} />
          <ContactList
            contacts={filteredContacts}
            hasContacts={contacts.length > 0}
            search={search}
            onDelete={deleteContact}
          />
        </section>
      </main>
    </div>
  );
}
