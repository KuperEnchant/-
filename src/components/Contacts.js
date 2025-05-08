import React from 'react';

function Contacts() {
  return (
    <section style={{
      maxWidth: 800,
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <h2 style={{
        color: '#2c3e50',
        marginBottom: 32,
        fontSize: '2rem',
        textAlign: 'center'
      }}>Контактная информация</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 32,
        marginBottom: 40
      }}>
        <div style={{
          background: '#fff',
          padding: 24,
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{
            color: '#2c3e50',
            marginBottom: 16,
            fontSize: '1.3rem'
          }}>Адрес</h3>
          <p style={{
            color: '#666',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            Посёлок Красный Алес
          </p>
        </div>

        <div style={{
          background: '#fff',
          padding: 24,
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{
            color: '#2c3e50',
            marginBottom: 16,
            fontSize: '1.3rem'
          }}>Телефон</h3>
          <p style={{
            color: '#666',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            +375 (0375) 2-24-44
          </p>
        </div>
      </div>

      <div style={{
        background: '#fff',
        padding: 24,
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
      }}>
        <h3 style={{
          color: '#2c3e50',
          marginBottom: 16,
          fontSize: '1.3rem'
        }}>Режим работы</h3>
        <p style={{
          color: '#666',
          fontSize: '1.1rem',
          lineHeight: 1.6
        }}>
          Пн-Пт: 9:00 - 18:00<br />
          Сб: 9:00 - 15:00<br />
          Вс: выходной
        </p>
      </div>
    </section>
  );
}

export default Contacts; 