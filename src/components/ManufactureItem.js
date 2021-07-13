import { ProductContainer } from '../styles';

import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

const ManufactureItem = ({ manufacture }) => {
  return (
    <ProductContainer>
      <h2>{manufacture.name}</h2>
      <Link to={`/manufactures/${manufacture.slug}`}>
        <img src={manufacture.img} alt={manufacture.name} />
      </Link>
    </ProductContainer>
  );
};

export default observer(ManufactureItem);
