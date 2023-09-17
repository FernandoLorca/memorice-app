import uuid4 from 'uuid4'
import { useState } from 'react'
import Card from './Card'
import CardPattern from './CardPattern'
import cardJson from '../cards/cards.json'

export default function CardGrid() {
  function newCards() {
    const duplicateCards = [...cardJson, ...cardJson]
    const addIdToCards = duplicateCards.map(card => {
      return {
        id: uuid4(),
        ...card,
      }
    })
    const shuffleCards = addIdToCards.sort(() => Math.random() - 0.5)

    return shuffleCards
  }

  const [showCard, setShowCard] = useState(newCards)

  const handleShowCard = () => {}

  return (
    <section className="grid grid-cols-5 px-3 grid-rows-4 place-items-center gap-2 md:gap-y-10">
      {showCard.map(card => (
        <div key={card.id}>
          <CardPattern
            handleShowCard={handleShowCard}
            cardId={card.id}
            flipped={card.flipped}
          />
          <Card
            handleShowCard={handleShowCard}
            cardContent={card.content}
            flipped={card.flipped}
          />
        </div>
      ))}
    </section>
  )
}
