import css from './Filter.modle.css';

export const Filter = ({ filter, whenFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={whenFilterChange}
    />
  );
};
