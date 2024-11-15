import React from 'react'

export default function Card({card}) {
    const style = {
        transform: `translate(${card.X}px, ${card.Y}px) rotate(${card.angle}deg)`,
        zIndex: card.zIndex,
        position: 'absolute',
        top: '20%',
        left: '45%'
    }
  return (
    <img src={card.image} style={style} />
  )
}
