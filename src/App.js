import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal';
import CartModal from './components/CartModal';
import About from './components/About';
import Contacts from './components/Contacts';
import FeedbackForm from './components/FeedbackForm';
import FAQ from './components/FAQ';
import { products as initialProducts } from './data';

function App() {
  const [section, setSection] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(initialProducts);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleAddReview = (productId, review, rating) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? {
              ...product,
              reviews: [...(product.reviews || []), { text: review, rating }],
              rating: ((product.rating || 0) * (product.reviews?.length || 0) + rating) / ((product.reviews?.length || 0) + 1)
            }
          : product
      )
    );
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="App">
      <Header 
        onSectionChange={setSection} 
        currentSection={section}
        cartItemsCount={cartItemsCount}
      />
      
      <main style={{ padding: '20px', maxWidth: 1200, margin: '0 auto' }}>
        {section === 'products' && (
          <ProductList 
            products={products}
            onProductClick={handleProductClick}
            onAddToCart={handleAddToCart}
          />
        )}
        {section === 'about' && <About />}
        {section === 'contacts' && <Contacts />}
        {section === 'feedback' && <FeedbackForm />}
        {section === 'faq' && <FAQ />}
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseProduct}
          onAddToCart={handleAddToCart}
          onAddReview={handleAddReview}
        />
      )}

      {cartOpen && (
        <CartModal
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={handleRemoveFromCart}
          onChangeQty={handleUpdateQuantity}
        />
      )}

      {/* Фиксированная кнопка корзины */}
      <button
        onClick={() => setCartOpen(true)}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          background: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '28px',
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
          zIndex: 3000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        🛒
        {cartItemsCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: '#e74c3c',
            color: 'white',
            borderRadius: '50%',
            width: '22px',
            height: '22px',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700
          }}>{cartItemsCount}</span>
        )}
      </button>
    </div>
  );
}

export default App;
