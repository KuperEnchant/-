import React, { useState } from 'react';
import { products, categories, brands } from '../data';

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) stars.push('★');
  if (half) stars.push('☆');
  while (stars.length < 5) stars.push('☆');
  return <span style={{color:'#f5b301',fontSize:'1.1em'}}>{stars.join('')}</span>;
}

function ProductList({ onProductClick, onAddToCart }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [inStock, setInStock] = useState(false);
  const [sort, setSort] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');

  let filtered = products.filter(p =>
    (category ? p.category === category : true) &&
    (brand ? p.brand === brand : true) &&
    (inStock ? p.inStock : true) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase())) &&
    (priceMin ? p.price >= Number(priceMin) : true) &&
    (priceMax ? p.price <= Number(priceMax) : true)
  );

  if (sort === 'price-asc') filtered = filtered.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') filtered = filtered.sort((a, b) => b.price - a.price);
  if (sort === 'new') filtered = filtered.sort((a, b) => b.isNew - a.isNew);
  if (sort === 'popular') filtered = filtered.sort((a, b) => b.rating - a.rating);

  return (
    <section>
      <h2>Каталог автозапчастей</h2>
      <div style={{display:'flex',flexWrap:'wrap',gap:12,alignItems:'center'}}>
        <input
          type="text"
          placeholder="Поиск по названию или описанию..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Все категории</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select value={brand} onChange={e => setBrand(e.target.value)}>
          <option value="">Все бренды</option>
          {brands.map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <label style={{fontSize:'0.98em'}}>
          <input type="checkbox" checked={inStock} onChange={e => setInStock(e.target.checked)} /> В наличии
        </label>
        <input type="number" placeholder="Цена от" value={priceMin} min={0} onChange={e=>setPriceMin(e.target.value)} style={{width:90}} />
        <input type="number" placeholder="до" value={priceMax} min={0} onChange={e=>setPriceMax(e.target.value)} style={{width:70}} />
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="">Без сортировки</option>
          <option value="price-asc">Цена ↑</option>
          <option value="price-desc">Цена ↓</option>
          <option value="new">Новинки</option>
          <option value="popular">Популярные</option>
        </select>
      </div>
      <div className="product-list">
        {filtered.length === 0 && <p>Ничего не найдено.</p>}
        {filtered.map(p => (
          <div className="product-card" key={p.id}>
            <div style={{position: 'relative'}}>
              <img src={p.img} alt={p.name} />
              <div style={{
                position: 'absolute',
                top: 10,
                right: 10,
                display: 'flex',
                gap: '5px'
              }}>
                {p.isNew && (
                  <span style={{
                    background: '#4CAF50',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8em',
                    fontWeight: 'bold'
                  }}>NEW</span>
                )}
                {p.isSale && (
                  <span style={{
                    background: '#f44336',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8em',
                    fontWeight: 'bold'
                  }}>SALE</span>
                )}
                {p.isTop && (
                  <span style={{
                    background: '#FFC107',
                    color: 'black',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8em',
                    fontWeight: 'bold'
                  }}>TOP</span>
                )}
              </div>
            </div>
            <h4>{p.name}</h4>
            <div style={{marginBottom:6}}>{renderStars(p.rating)} <span style={{fontSize:'0.98em',color:'#888',marginLeft:4}}>{p.rating}</span></div>
            <p>{p.description}</p>
            <p><b>Категория:</b> {p.category}</p>
            <p><b>Бренд:</b> {p.brand}</p>
            <p><b>Цена:</b> {p.price} BYN</p>
            <p style={{color: p.inStock ? 'green' : 'red'}}>{p.inStock ? 'В наличии' : 'Нет в наличии'}</p>
            <div style={{display:'flex',gap:8,justifyContent:'center'}}>
              <button onClick={() => onProductClick(p)}>Подробнее</button>
              <button 
                disabled={!p.inStock} 
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(p);
                }} 
                style={{background:p.inStock?'#1a3d6d':'#ccc',color:'#fff'}}
              >
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => window.print()}>Печать прайс-листа</button>
    </section>
  );
}

export default ProductList; 