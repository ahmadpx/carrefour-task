import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SignInForm from './components/SignInForm';
import Product from './components/Product';
import { getProducts, searchProducts } from './utils/search.utils';
import { COLORS } from './constatns';

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto 20px;

  @media (max-width: 840px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Products = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 840px) {
    justify-content: space-around;
  }
`;

const NoResults = styled.div`
  width: 100%;
  text-align: center;
  color: ${COLORS.text};
  font-size: 16px;
  font-weight: 400;
`;

function App() {
  const [allProducts] = useState(getProducts());
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState(allProducts);

  return (
    <Wrapper>
      <Header
        query={query}
        onSearch={event => {
          const query = event.target.value;
          setQuery(query);
          setProducts(searchProducts(query, allProducts));
        }}
      />

      <SignInForm />

      {Array.isArray(products) && products.length > 0 ? (
        <Products>
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </Products>
      ) : (
        <NoResults>
          Sorry, we couldn't found any results matches your search criteria.{' '}
          <br />
          try to update your search query.
        </NoResults>
      )}
    </Wrapper>
  );
}

export default App;
