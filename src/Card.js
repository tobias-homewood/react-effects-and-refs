import React from 'react'

export default function Card({key, image}) {
    const angle = Math.random() * 40 - 20;   // between -20 and 20
    const randomX = Math.random() * 20 - 10; // between -10 and 10
    const randomY = Math.random() * 20 - 10; // between -10 and 10
    const zIndex = key;
    const style = {
        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`,
        zIndex: zIndex,
        position: 'absolute',
        top: '20%',
        left: '45%'
    }
  return (
    <img src={image} alt={code} style={style} />
  )
}
