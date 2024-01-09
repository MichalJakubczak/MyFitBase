import React, { useState, useEffect } from 'react';
import styles from '../assets/css/Formularz.module.css'
const Formularz = () => {
  const poczatkoweOpcje = [
    { nazwa: "kurczak z ryżem", wartosc: 550 },
    { nazwa: "zupa groszek", wartosc: 345 },
    { nazwa: "kanapka z serem", wartosc: 254 },
    { nazwa: "jajecznica", wartosc: 316 },
    { nazwa: "kotlet z ziemniakami", wartosc: 540 },
    { nazwa: "spaghetti carbonara", wartosc: 520 },
    { nazwa: "pizza mała margherita", wartosc: 620 },
    { nazwa: "shake proteinowy", wartosc: 400 },
    { nazwa: "jabłko", wartosc: 90 },
    { nazwa: "banan", wartosc: 116 }
  ];
  
  const [opcje, setOpcje] = useState(poczatkoweOpcje);
  const [wybory, setWybory] = useState([]);
  const [nowyPosilek, setNowyPosilek] = useState('');
  const [nowaWartosc, setNowaWartosc] = useState('');
  const [sumaKalorii, setSumaKalorii] = useState(0);

  const dodajSelect = () => {
    setWybory([...wybory, '']);
  };

  const zmienWybor = (index, value) => {
    const noweWybory = [...wybory];
    noweWybory[index] = value;
    setWybory(noweWybory);
  };

  const dodajPosilek = () => {
    if (nowyPosilek && nowaWartosc) {
      setOpcje([...opcje, { nazwa: nowyPosilek, wartosc: Number(nowaWartosc) }]);
      setNowyPosilek('');
      setNowaWartosc('');
    }
  };
  useEffect(() => {
    localStorage.setItem('opcje', JSON.stringify(opcje));
    localStorage.setItem('wybory', JSON.stringify(wybory));
  }, [opcje, wybory]);
  
  const usunWybor = index => {
    const noweWybory = wybory.filter((_, i) => i !== index);
    setWybory(noweWybory);
  };
  const obliczKalorie = () => {
    const suma = wybory.reduce((acc, curr) => acc + (Number(curr) || 0), 0);
    setSumaKalorii(suma);
  };
  return (
    <div>
      <form className={styles.formularz}>
        {wybory.map((_, index) => (
          <div key={index} className={styles.wiersz}>
            <select 
              value={wybory[index]} 
              onChange={(e) => zmienWybor(index, e.target.value)}
            >
              <option value="">Wybierz opcję</option>
              {opcje.map(opcja => (
                <option key={opcja.nazwa} value={opcja.wartosc}>{opcja.nazwa}</option>
              ))}
            </select>
            <button type="button" onClick={() => usunWybor(index)}>Usuń</button>
          </div>
        ))}
        <button type="button" onClick={dodajSelect}>Dodaj nowy wybór</button>
        <button type="button" onClick={obliczKalorie}>Policz kalorie</button>
        {sumaKalorii > 0 && <p>Suma kalorii: {sumaKalorii}</p>}
      </form>

      <div>
        <input 
          type="text" 
          placeholder="Nazwa posiłku" 
          value={nowyPosilek} 
          onChange={(e) => setNowyPosilek(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Wartość kaloryczna" 
          value={nowaWartosc} 
          onChange={(e) => setNowaWartosc(e.target.value)} 
        />
        <button onClick={dodajPosilek}>Dodaj posiłek</button>
        
      </div>
    </div>
  );
};

export default Formularz;