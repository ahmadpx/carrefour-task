import productImg from '../assets/product.png';

/**
 * get products
 * @returns {Array<Object>} products
 */
export function getProducts() {
  return [
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
}

/**
 * search products
 * @param {String} query
 * @param {Array<Object>} products
 * @returns {Array<Object>} products
 */
export function searchProducts(query, products) {
  if (!products || !products.length) return;

  return products.filter(({ title }) => {
    if (typeof title !== 'string' || typeof query !== 'string') return false;
    return title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}
