import React, { useState } from 'react';

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) stars.push('★');
  if (half) stars.push('☆');
  while (stars.length < 5) stars.push('☆');
  return <span style={{color:'#f5b301',fontSize:'1.2em'}}>{stars.join('')}</span>;
}

function ProductModal({ product, onClose, onAddToCart, onAddReview }) {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = e => {
    e.preventDefault();
    if (review.trim()) {
      onAddReview(product.id, review, rating);
      setReview('');
      setRating(5);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(4px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }} onClick={onClose}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        padding: 32,
        minWidth: 320,
        maxWidth: 800,
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        position: 'relative'
      }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: 16,
          right: 16,
          fontSize: 24,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#666',
          transition: 'color 0.2s ease',
          padding: 4,
          lineHeight: 1
        }}>&times;</button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          alignItems: 'start'
        }}>
          <div>
            <img
              src={product.img} 
              alt={product.name}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: 12,
                background: '#f8f9fa',
                padding: 16,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
              }}
            />
          </div>

          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: '1.5rem',
              color: '#2c3e50'
            }}>{product.name}</h2>

            <div style={{ marginBottom: 16 }}>
              <p style={{ margin: '8px 0', color: '#666' }}><b>Бренд:</b> {product.brand}</p>
              <p style={{ margin: '8px 0', color: '#666' }}><b>Категория:</b> {product.category}</p>
              <p style={{ margin: '8px 0', color: '#666' }}><b>Цена:</b> {product.price} BYN</p>
              <p style={{
                margin: '8px 0',
                color: product.inStock ? '#27ae60' : '#e74c3c',
                fontWeight: 500
              }}>{product.inStock ? 'В наличии' : 'Нет в наличии'}</p>
            </div>

            <div style={{ marginBottom: 16 }}>
              <b style={{ color: '#2c3e50' }}>Рейтинг:</b>
              <div style={{ marginTop: 8 }}>
                {renderStars(product.rating)}
                <span style={{ marginLeft: 8, color: '#666' }}>{product.rating} / 5</span>
              </div>
            </div>

            <button 
              style={{
                background: product.inStock ? '#3498db' : '#bdc3c7',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '12px 24px',
                fontWeight: 500,
                fontSize: '1rem',
                cursor: product.inStock ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s ease',
                width: '100%'
              }}
              disabled={!product.inStock}
              onClick={() => onAddToCart(product)}
            >
              В корзину
            </button>
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <h3 style={{ color: '#2c3e50', marginBottom: 16 }}>Описание</h3>
          <div style={{
            background: '#f8f9fa',
            borderRadius: 8,
            padding: 16,
            marginBottom: 24
          }}>
            <p style={{ margin: 0, lineHeight: 1.6, color: '#34495e' }}>
              {product.description}
            </p>
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <h3 style={{ color: '#2c3e50', marginBottom: 16 }}>Характеристики</h3>
          <div style={{
            background: '#f8f9fa',
            borderRadius: 8,
            padding: 16
          }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {Object.entries(product.specs).map(([k, v]) => (
                <li key={k} style={{
                  padding: '8px 0',
                  borderBottom: '1px solid #e1e8ed',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ color: '#666' }}>{k}</span>
                  <span style={{ color: '#2c3e50', fontWeight: 500 }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <h3 style={{ color: '#2c3e50', marginBottom: 16 }}>Отзывы</h3>
          <div style={{
            background: '#f8f9fa',
            borderRadius: 8,
            padding: 16,
            marginBottom: 16
          }}>
            {product.reviews && product.reviews.length > 0 ? (
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {product.reviews.map((r, i) => (
                  <li key={i} style={{
                    padding: '12px 0',
                    borderBottom: '1px solid #e1e8ed'
                  }}>
                    <div style={{ marginBottom: 8 }}>{r.text}</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>
                      {renderStars(r.rating)} <span style={{ marginLeft: 4 }}>{r.rating}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: '#666', margin: 0 }}>Пока нет отзывов</p>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <textarea
              value={review}
              onChange={e => setReview(e.target.value)}
              placeholder="Ваш отзыв"
              required
              style={{
                width: '100%',
                minHeight: 80,
                padding: 12,
                borderRadius: 8,
                border: '1px solid #e1e8ed',
                marginBottom: 12,
                fontSize: '0.95rem',
                resize: 'vertical'
              }}
            />
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <select
                value={rating}
                onChange={e => setRating(Number(e.target.value))}
                style={{
                  padding: '8px 12px',
                  borderRadius: 6,
                  border: '1px solid #e1e8ed',
                  fontSize: '0.95rem'
                }}
              >
                {[5, 4, 3, 2, 1].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <button
                type="submit"
                style={{
                  background: '#3498db',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '8px 20px',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Оставить отзыв
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductModal; 