import React from 'react';

function About() {
  return (
    <section style={{
      maxWidth: 1000,
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <h2 style={{
        color: '#2c3e50',
        marginBottom: 40,
        fontSize: '2rem',
        textAlign: 'center'
      }}>О магазине</h2>

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
            fontSize: '1.3rem',
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
            <span style={{ fontSize: '1.5rem' }}>🏪</span>
            О нас
          </h3>
          <p style={{
            color: '#666',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            Магазин автозапчастей "Авто плюс" работает на рынке автозапчастей более 10 лет. Мы предлагаем широкий ассортимент качественных запчастей для различных марок автомобилей. Наша цель - обеспечить клиентов надежными запчастями по доступным ценам.
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
            fontSize: '1.3rem',
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
            <span style={{ fontSize: '1.5rem' }}>⭐</span>
            Наши преимущества
          </h3>
          <ul style={{
            color: '#666',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            paddingLeft: 20,
            margin: 0
          }}>
            <li>Только оригинальные запчасти</li>
            <li>Гарантия на все товары</li>
            <li>Быстрая доставка</li>
            <li>Профессиональные консультации</li>
            <li>Доступные цены</li>
          </ul>
        </div>
      </div>

      <div style={{
        background: '#fff',
        padding: 32,
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        marginBottom: 40
      }}>
        <h3 style={{
          color: '#2c3e50',
          marginBottom: 24,
          fontSize: '1.3rem',
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <span style={{ fontSize: '1.5rem' }}>🔧</span>
          Услуги
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 24
        }}>
          <div>
            <h4 style={{
              color: '#2c3e50',
              marginBottom: 12,
              fontSize: '1.1rem'
            }}>Подбор запчастей</h4>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: 1.6
            }}>
              Наши специалисты помогут подобрать нужные запчасти для вашего автомобиля, учитывая все технические характеристики и требования.
            </p>
          </div>
          <div>
            <h4 style={{
              color: '#2c3e50',
              marginBottom: 12,
              fontSize: '1.1rem'
            }}>Консультации</h4>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: 1.6
            }}>
              Получите профессиональную консультацию по выбору запчастей, их установке и обслуживанию вашего автомобиля.
            </p>
          </div>
          <div>
            <h4 style={{
              color: '#2c3e50',
              marginBottom: 12,
              fontSize: '1.1rem'
            }}>Доставка</h4>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: 1.6
            }}>
              Осуществляем быструю доставку по посёлку Красный Алес и близлежащим населенным пунктам.
            </p>
          </div>
        </div>
      </div>

      <div style={{
        background: '#fff',
        padding: 32,
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
      }}>
        <h3 style={{
          color: '#2c3e50',
          marginBottom: 24,
          fontSize: '1.3rem',
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <span style={{ fontSize: '1.5rem' }}>📞</span>
          Контактная информация
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 24
        }}>
          <div>
            <h4 style={{
              color: '#2c3e50',
              marginBottom: 12,
              fontSize: '1.1rem'
            }}>Адрес</h4>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: 1.6
            }}>
              Посёлок Красный Алес
            </p>
          </div>
          <div>
            <h4 style={{
              color: '#2c3e50',
              marginBottom: 12,
              fontSize: '1.1rem'
            }}>Телефон</h4>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: 1.6
            }}>
              +375 (0375) 2-24-44
            </p>
          </div>
          <div>
            <h4 style={{
              color: '#2c3e50',
              marginBottom: 12,
              fontSize: '1.1rem'
            }}>Режим работы</h4>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: 1.6
            }}>
              Пн-Пт: 9:00 - 18:00<br />
              Сб: 9:00 - 15:00<br />
              Вс: выходной
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 