import React, { useState } from 'react';

function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      maxWidth: 600,
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <h2 style={{
        margin: '0 0 32px 0',
        color: '#2c3e50',
        fontSize: '1.8rem',
        textAlign: 'center'
      }}>Обратная связь</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{
          background: '#fff',
          borderRadius: 16,
          padding: 32,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ marginBottom: 24 }}>
            <label style={{
              display: 'block',
              marginBottom: 8,
              color: '#666',
              fontSize: '1rem'
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

          <div style={{ marginBottom: 24 }}>
            <label style={{
              display: 'block',
              marginBottom: 8,
              color: '#666',
              fontSize: '1rem'
            }}>Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
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

          <div style={{ marginBottom: 32 }}>
            <label style={{
              display: 'block',
              marginBottom: 8,
              color: '#666',
              fontSize: '1rem'
            }}>Сообщение</label>
            <textarea
              required
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: 8,
                border: '1px solid #e1e8ed',
                fontSize: '1rem',
                minHeight: 150,
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
            Отправить сообщение
          </button>
        </form>
      ) : (
        <div style={{
          textAlign: 'center',
          background: '#fff',
          borderRadius: 16,
          padding: 40,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
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
          }}>Спасибо за обратную связь!</h3>
          <p style={{
            color: '#666',
            marginBottom: 24
          }}>Мы рассмотрим ваше сообщение и свяжемся с вами в ближайшее время.</p>
          <button
            onClick={() => setSubmitted(false)}
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
            Отправить еще одно сообщение
          </button>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm; 