import uuid4 from 'uuid4'
import { useState } from 'react'
import Card from './Card'
import CardPattern from './CardPattern'
import cardJson from '../cards/cards.json'

export default function CardGrid() {
  function newCards() {
    const duplicateCards = [...cardJson, ...cardJson]
    const addParametersToCards = duplicateCards.map(card => {
      return {
        id: uuid4(),
        ...card,
        flipped: false,
      }
    })
    const shuffleCards = addParametersToCards.sort(() => Math.random() - 0.5)

    return shuffleCards
  }

  const [showCard, setShowCard] = useState(newCards)

  const flippedCardsHandler = id => {
    const updateCard = showCard.map(card => {
      if (card.id === id) {
        return {
          ...card,
          flipped: !card.flipped,
        }
      } else {
        return card
      }
    })
    setShowCard(updateCard)
  }

  return (
    <section className="grid grid-cols-5 px-3 grid-rows-4 place-items-center gap-2 md:gap-y-10">
      {showCard.map(card => (
        <div key={card.id}>
          <CardPattern
            cardId={card.id}
            flipped={card.flipped}
            flippedCardsHandler={flippedCardsHandler}
          />
          <Card
            cardId={card.id}
            cardContent={card.content}
            flipped={card.flipped}
            flippedCardsHandler={flippedCardsHandler}
          />
        </div>
      ))}
    </section>
  )
}
