import productImg from '../assets/product.png';
import { searchProducts } from './search.utils';

describe('searchProducts', () => {
  it('should return empty array if there is no products provided', function() {
    expect(searchProducts('query')).toEqual([]);
  });

  it('should return empty array if the products count is zero', function() {
    expect(searchProducts('query', [])).toEqual([]);
  });

  it('should filter results by title depending on the query provided', function() {
    const products = [
      {
        href: '#product link',
        img: productImg,
        title: 'iPhone 6 Black',
        price: 1000,
        currency: 'AED'
      },
      {
        href: '#product link',
        img: productImg,
        title: 'iPhone 7 Black',
        price: 2000,
        currency: 'AED'
      },
      {
        href: '#product link',
        img: productImg,
        title: 'iPhone 8 Black',
        price: 3000,
        currency: 'AED'
      },
      {
        href: '#product link',
        img: productImg,
        title: 'Samsung note 8',
        price: 1500,
        currency: 'AED'
      },
      {
        href: '#product link',
        img: productImg,
        title: 'Huawei P20',
        price: 2000,
        currency: 'AED'
      }
    ];
    const query = 'iphone';
    const filteredProducts = searchProducts(query, products);

    filteredProducts.forEach(product => {
      expect(product.title.toLowerCase()).toContain(query.toLowerCase());
    });
  });
});
