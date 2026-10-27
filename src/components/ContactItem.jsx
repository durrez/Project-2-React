import { Mail, Phone, Trash2 } from "lucide-react";

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function ContactItem({ contact, onDelete }) {
  return (
    <li className="contact-item">
      <div className="avatar" aria-hidden="true">
        {initials(contact.name)}
      </div>

      <div className="contact-info">
        <h3>{contact.name}</h3>
        <div className="contact-details">
          <a href={`mailto:${contact.email}`}>
            <Mail size={15} />
            <span>{contact.email}</span>
          </a>
          <a href={`tel:${contact.phone}`}>
            <Phone size={15} />
            <span>{contact.phone}</span>
          </a>
        </div>
      </div>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(contact.id)}
        aria-label={`Delete ${contact.name}`}
        title="Delete contact"
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
}
