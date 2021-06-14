// components
import { InputField } from '../styles';

const Searchbar = ({ setQuery }) => {
  return (
    <InputField
      onChange={event => setQuery(event.target.value)}
      placeholder="Enter Your Query Here..."
    />
  );
};

export default Searchbar;
