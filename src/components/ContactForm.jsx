import { useState } from "react";
import { UserPlus } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: ""
};

export default function ContactForm({ onAddContact }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  }

  function validate() {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+()\-\s]{7,20}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    onAddContact({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim()
    });

    setForm(initialForm);
    setErrors({});
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="e.g. Sarah Khan"
          value={form.name}
          onChange={handleChange}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="sarah@example.com"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 555 012 3456"
          value={form.phone}
          onChange={handleChange}
          className={errors.phone ? "input-error" : ""}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      <button className="primary-button" type="submit">
        <UserPlus size={18} />
        Add Contact
      </button>
    </form>
  );
}
