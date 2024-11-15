import React from 'react'
import Card from './Card'

export default function Deck({cards, drawCard, shuffleDeck, shuffling, drawing}) {
  return (
    <>
    <button onClick={shuffleDeck} disabled={shuffling || drawing}>{shuffling ? "Shuffling..." : "Shuffle Deck"}</button>
    <button onClick={drawCard} disabled={shuffling || drawing}>{drawing ? "Drawing a Card..." : "Draw a Card"}</button>
      {cards.map((card, index) => 
        <Card key={index} card={card} />
      )}
    </>
  )
}