# Simple Contact Book

A small single-page React application for the contact-book assignment.

## Features

- Add a contact with Name, Email, and Phone
- Controlled React form inputs
- Client-side required/email/phone validation
- List all contacts
- Search/filter by name or email
- Delete contacts
- Dynamic rendering with `map()`
- Filtering with `filter()`
- Unique React keys
- Conditional empty/search states
- Responsive CSS
- Component composition and props

## Components

- `App.jsx` — main application state and data flow
- `ContactForm.jsx` — controlled form and validation
- `SearchBar.jsx` — controlled search input
- `ContactList.jsx` — dynamic/conditional contact list
- `ContactItem.jsx` — individual contact

## Run locally

1. Install Node.js if needed.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite.

## Build

```bash
npm run build
```

No backend or database is used. Contacts live in React state for the current browser session, as required by the assignment.
