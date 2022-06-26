import React, {useEffect, useState, useCallback} from 'react';
import Card from './Card.js';

const Carousel = () => {
  const [cardRefs, setCardRefs] = useState({
    previousCard: 0,
    currentCard: 0,
    nextCard: 1
  })

  return (
    <div>
      I AM A CAROUSEL COMPONENT
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Carousel;