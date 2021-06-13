// components
import { InputField } from '../styles';

const Searchbar = props => {
  return (
    <InputField
      onChange={event => props.setQuery(event.target.value.toUpperCase())}
      placeholder="Enter Your Query Here..."
    />
  );
};

export default Searchbar;
