import './App.css';
import Deck from './Deck';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function App() {
  const deckId = useRef();
  const [drawnCards, setDrawnCards] = useState([]);
  const [shuffling, setShuffling] = useState(false);
  const [drawing, setDrawing] = useState(false);

  const getNewDeck = async () => {
    setShuffling(true);
    const data = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    
    if (data.status !== 200) {
      console.error('Error fetching deck');
      return null;
    }

    deckId.current = data.data.deck_id;
    setShuffling(false);
  }

  const drawCard = async () => {
    setDrawing(true);
    const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId.current}/draw/?count=1`);
    
    if (res.status !== 200 || res.data == null) {
      console.error('Error fetching card');
      return null;
    }
    const card = {}
    card.image = res.data.cards[0].image;
    card.code = res.data.cards[0].code;
    card.X = Math.random() * 40 - 20;
    card.Y = Math.random() * 40 - 20;
    card.angle = Math.random() * 40 - 20;
    card.zIndex = -res.data.remaining;

    setDrawnCards(prevDrawnCards => [...prevDrawnCards, card]);
    setDrawing(false);
  }

  const shuffleDeck = async () => {
    await getNewDeck();
    setDrawnCards([]);
  }

  // run once on mount, get a new shuffled deck
  useEffect(() => {
    getNewDeck();
    return () => {
      deckId.current = null
    }
  }, []);

  return (
    <Deck cards={drawnCards} drawCard={drawCard} shuffleDeck={shuffleDeck} shuffling={shuffling} drawing={drawing}/>
  );
}

export default App;
