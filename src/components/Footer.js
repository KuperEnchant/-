import React from 'react';

function Footer() {
  return (
    <footer style={{background:'#1a3d6d',color:'#fff',padding:'24px 0',textAlign:'center',marginTop:40}}>
      <div style={{marginBottom:8}}>
        <b>Авто плюс</b> | г. Гомель, ул. Примерная, 10 | +375 (29) 123-45-67 | info@avtoplus.by
      </div>
      <div style={{marginBottom:8}}>
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer" style={{color:'#fff',margin:'0 8px'}}>VK</a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" style={{color:'#fff',margin:'0 8px'}}>Telegram</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{color:'#fff',margin:'0 8px'}}>Instagram</a>
      </div>
      <div style={{fontSize:'0.95em',opacity:0.8}}>&copy; {new Date().getFullYear()} Авто плюс. Все права защищены.</div>
    </footer>
  );
}

export default Footer; 