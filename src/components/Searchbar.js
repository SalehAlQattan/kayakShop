// components
import { InputField } from '../styles';

const SearchBar = ({ setQuery }) => {
  return (
    <InputField
      onChange={event => setQuery(event.target.value)}
      placeholder="Enter Your Query Here..."
    />
  );
};

export default SearchBar;
