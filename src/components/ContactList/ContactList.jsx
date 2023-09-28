export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact, i) => (
        <li key={i}>
          {contact.name}: {contact.number}
          <button onClick={() => deleteContact(i)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
