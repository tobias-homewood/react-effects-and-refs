import React from 'react'
import Card from './Card'

export default function Deck({cards}) {
  return (
    <>
    <button onClick={drawCard}>Get Card</button>
      {cards.map((card, index) => 
        <Card key={index} image={card.image} />
      )}
    </>
  )
}