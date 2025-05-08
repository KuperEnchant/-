import React from 'react';

const vacancies = [
  {
    title: 'Продавец-консультант автозапчастей',
    requirements: [
      'Опыт работы в продажах автозапчастей приветствуется',
      'Знание устройства автомобиля',
      'Коммуникабельность, ответственность',
    ],
    conditions: [
      'Официальное трудоустройство',
      'График: 2/2, с 9:00 до 19:00',
      'Заработная плата от 1200 BYN',
    ],
    contact: 'Звоните: +375 (29) 123-45-67 или пишите на info@avtoplus.by',
  },
  {
    title: 'Менеджер по закупкам',
    requirements: [
      'Опыт работы в закупках или логистике',
      'Уверенный пользователь ПК',
      'Внимательность, умение вести переговоры',
    ],
    conditions: [
      'Официальное трудоустройство',
      'График: 5/2, с 9:00 до 18:00',
      'Заработная плата по итогам собеседования',
    ],
    contact: 'Резюме отправлять на info@avtoplus.by',
  },
  {
    title: 'Автослесарь',
    requirements: [
      'Опыт работы с легковыми автомобилями',
      'Знание устройства автомобиля',
      'Аккуратность, ответственность',
    ],
    conditions: [
      'Официальное трудоустройство',
      'График: 2/2, с 9:00 до 19:00',
      'Заработная плата от 1500 BYN',
    ],
    contact: 'Звоните: +375 (29) 123-45-67',
  },
];

function Vacancies() {
  return (
    <section>
      <h2>Вакансии</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 24}}>
        {vacancies.map((v, idx) => (
          <div key={idx} style={{background:'#f2f6fa', border:'1px solid #dbe6f6', borderRadius:12, boxShadow:'0 2px 8px #e0e7ef', padding: '18px 16px', width: 320, marginBottom: 18}}>
            <h3 style={{color:'#1a3d6d', marginTop:0}}>{v.title}</h3>
            <b>Требования:</b>
            <ul>{v.requirements.map((r,i)=>(<li key={i}>{r}</li>))}</ul>
            <b>Условия:</b>
            <ul>{v.conditions.map((c,i)=>(<li key={i}>{c}</li>))}</ul>
            <div style={{marginTop:8, fontSize:'0.98em'}}>{v.contact}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Vacancies; 