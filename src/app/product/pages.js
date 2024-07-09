import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter hook
import { CartContext } from '../cartContext'; // Import cart context

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  componentDidMount() {
    const { productId } = this.props.router;
    // Fetch product data based on productId
    const fetchData = async () => {
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();
      this.setState({ product: data });
    };
    fetchData();
  }

  render() {
    const { product } = this.state;
    const { addToCart } = useContext(CartContext); // Access addToCart function

    if (!product) return <div>Loading...</div>;

    return (
      <div className="bg-white min-h-screen">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  }
}

Product.getInitialProps = async (context) => {
  const { router } = context;
  const { productId } = router.query;

  // Optionally fetch product data here for server-side rendering (SSR)
  return { productId };
};

export default ProductPage;
