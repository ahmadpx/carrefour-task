import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SignInForm from './components/SignInForm';
import Product from './components/Product';
import { getProducts, searchProducts } from './utils/search.utils';

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

      <Products>
        {Array.isArray(products) &&
          products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
      </Products>
    </Wrapper>
  );
}

export default App;
