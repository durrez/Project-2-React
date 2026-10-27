import ContactItem from "./ContactItem";

export default function ContactList({
  contacts,
  hasContacts,
  search,
  onDelete
}) {
  if (!hasContacts) {
    return (
      <div className="empty-state">
        <div className="empty-icon">👋</div>
        <h3>No contacts yet</h3>
        <p>Add your first contact using the form.</p>
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🔎</div>
        <h3>No matches found</h3>
        <p>No contacts match “{search}”. Try another search.</p>
      </div>
    );
  }

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
