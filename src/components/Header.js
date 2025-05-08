import React, { useState, useRef, useEffect } from 'react';

function Header({ onSectionChange, currentSection, cartItemsCount }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header style={{
      background: 'linear-gradient(135deg, #1a3d6d 0%, #2c3e50 100%)',
      padding: '20px',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <button
            onClick={() => onSectionChange('products')}
            style={{
              background: currentSection === 'products' ? '#3498db' : 'transparent',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
          >
            Каталог
          </button>

          <div style={{ position: 'relative' }} ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                background: 'transparent',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              Информация
              <span style={{
                transition: 'transform 0.3s ease',
                transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)'
              }}>
                ▼
              </span>
            </button>

            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '8px 0',
                minWidth: '200px',
                marginTop: '8px'
              }}>
                <button
                  onClick={() => {
                    onSectionChange('about');
                    setDropdownOpen(false);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 20px',
                    background: 'none',
                    border: 'none',
                    color: '#2c3e50',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      background: '#f8f9fa'
                    }
                  }}
                >
                  О магазине
                </button>
                <button
                  onClick={() => {
                    onSectionChange('contacts');
                    setDropdownOpen(false);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 20px',
                    background: 'none',
                    border: 'none',
                    color: '#2c3e50',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      background: '#f8f9fa'
                    }
                  }}
                >
                  Контакты
                </button>
                <button
                  onClick={() => {
                    onSectionChange('faq');
                    setDropdownOpen(false);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 20px',
                    background: 'none',
                    border: 'none',
                    color: '#2c3e50',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      background: '#f8f9fa'
                    }
                  }}
                >
                  FAQ
                </button>
                <button
                  onClick={() => {
                    onSectionChange('feedback');
                    setDropdownOpen(false);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 20px',
                    background: 'none',
                    border: 'none',
                    color: '#2c3e50',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      background: '#f8f9fa'
                    }
                  }}
                >
                  Обратная связь
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 