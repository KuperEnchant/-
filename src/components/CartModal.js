import React, { useState } from 'react';

function CartModal({ cart, onClose, onRemove, onChangeQty }) {
  const [step, setStep] = useState('cart');
  const [form, setForm] = useState({ name: '', phone: '', address: '' });
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = e => {
    e.preventDefault();
    setStep('done');
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
        maxWidth: 500,
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

        <h2 style={{
          margin: '0 0 24px 0',
          color: '#2c3e50',
          fontSize: '1.5rem'
        }}>Корзина</h2>

        {step === 'cart' && (
          <>
            {cart.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 0',
                color: '#666'
              }}>
                <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>Корзина пуста</p>
                <button
                  onClick={onClose}
                  style={{
                    background: '#3498db',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '12px 24px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Продолжить покупки
                </button>
              </div>
            ) : (
              <>
                <div style={{
                  maxHeight: '60vh',
                  overflowY: 'auto',
                  marginBottom: 24
                }}>
                  {cart.map(item => (
                    <div key={item.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '16px 0',
                      borderBottom: '1px solid #e1e8ed'
                    }}>
                      <div style={{ flex: 1 }}>
                        <h4 style={{
                          margin: '0 0 8px 0',
                          color: '#2c3e50',
                          fontSize: '1.1rem'
                        }}>{item.name}</h4>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12
                        }}>
                          <span style={{ color: '#666' }}>{item.price} BYN</span>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8
                          }}>
                            <button
                              onClick={() => onChangeQty(item.id, Math.max(0, item.quantity - 1))}
                              style={{
                                background: '#f0f0f0',
                                border: 'none',
                                borderRadius: 4,
                                width: 24,
                                height: 24,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                              }}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => onChangeQty(item.id, item.quantity + 1)}
                              style={{
                                background: '#f0f0f0',
                                border: 'none',
                                borderRadius: 4,
                                width: 24,
                                height: 24,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                              }}
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => onRemove(item.id)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#e74c3c',
                              cursor: 'pointer',
                              padding: 4,
                              fontSize: '0.9rem'
                            }}
                          >
                            Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: '#f8f9fa',
                  borderRadius: 8,
                  padding: 16,
                  marginBottom: 24
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.1rem',
                    color: '#2c3e50',
                    fontWeight: 500
                  }}>
                    <span>Итого:</span>
                    <span>{total} BYN</span>
                  </div>
                </div>

                <button
                  onClick={() => setStep('order')}
                  style={{
                    background: '#3498db',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '14px 24px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    width: '100%'
                  }}
                >
                  Оформить заказ
                </button>
              </>
            )}
          </>
        )}

        {step === 'order' && (
          <form onSubmit={handleOrder}>
            <h3 style={{
              margin: '0 0 24px 0',
              color: '#2c3e50',
              fontSize: '1.3rem'
            }}>Оформление заказа</h3>

            <div style={{ marginBottom: 16 }}>
              <label style={{
                display: 'block',
                marginBottom: 8,
                color: '#666'
              }}>Ваше имя</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 8,
                  border: '1px solid #e1e8ed',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease'
                }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{
                display: 'block',
                marginBottom: 8,
                color: '#666'
              }}>Телефон</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 8,
                  border: '1px solid #e1e8ed',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease'
                }}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{
                display: 'block',
                marginBottom: 8,
                color: '#666'
              }}>Адрес доставки</label>
              <textarea
                required
                value={form.address}
                onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 8,
                  border: '1px solid #e1e8ed',
                  fontSize: '1rem',
                  minHeight: 100,
                  resize: 'vertical',
                  transition: 'all 0.2s ease'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                background: '#3498db',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '14px 24px',
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                width: '100%'
              }}
            >
              Подтвердить заказ
            </button>
          </form>
        )}

        {step === 'done' && (
          <div style={{
            textAlign: 'center',
            padding: '40px 0'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: 16,
              color: '#27ae60'
            }}>✓</div>
            <h3 style={{
              margin: '0 0 16px 0',
              color: '#2c3e50',
              fontSize: '1.5rem'
            }}>Спасибо за заказ!</h3>
            <p style={{
              color: '#666',
              marginBottom: 24
            }}>Мы свяжемся с вами для подтверждения.</p>
            <button
              onClick={onClose}
              style={{
                background: '#3498db',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '12px 24px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Вернуться к покупкам
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal; 