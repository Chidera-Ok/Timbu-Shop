// components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    fetch('/api/productdetails')
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  render() {
    const { products } = this.state;

    return (
      <div className="grid grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
