import uuid4 from 'uuid4'
import { useState, useEffect } from 'react'
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
        matched: false,
      }
    })
    const shuffleCards = addParametersToCards.sort(() => Math.random() - 0.5)

    return shuffleCards
  }
  const [showCard, setShowCard] = useState(newCards)
  const [selectedCards, setSelectedCards] = useState([])

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards
      const updateCards = showCard.map(card => {
        if (card.id === firstCard || card.id === secondCard) {
          return {
            ...card,
            matched: true,
          }
        }
        return card
      })
      setShowCard(updateCards)
    }
  }, [selectedCards])

  function matchCheck() {
    const [firstIdCard, secondIdCard] = selectedCards

    const firstCard = showCard.filter(
      card => firstIdCard === card.id && card.id
    )

    const secondCard = showCard.filter(
      card => secondIdCard === card.id && card.id
    )

    console.log(firstCard)
    console.log(secondCard)

    if (firstCard[0].content !== secondCard[0].content)
      return setSelectedCards([])

    // Estoy haciendo match justo acá.
    // Arreglar el momento en que se realiza el match (funcion flippedCardsHandler) Porque la funcion match se invoca no en el momento correcto.
    console.log('match')
  }

  function flippedCardsHandler(id) {
    const flippedCards = showCard.filter(card => card.flipped)

    if (flippedCards.length === 2) {
      matchCheck()

      const updateCards = showCard.map(card => {
        if (card.flipped) {
          return {
            ...card,
            flipped: false,
          }
        }
        return card
      })
      setShowCard(updateCards)
    } else {
      const updateCard = showCard.map(card => {
        if (card.id === id) {
          return {
            ...card,
            flipped: !card.flipped,
          }
        }
        return card
      })
      setShowCard(updateCard)
    }
  }

  // if (selectedCards.length === 2) {
  //   const updateCards = showCard.map(card => {
  //     if (card.id !== selectedCards[0] || card.id !== selectedCards[1]) {
  //       return console.log('no son iguales')
  //     }
  //     return card
  //   })
  //   setShowCard(updateCards)
  //   setSelectedCards([])
  // }

  return (
    <section className="grid grid-cols-3 px-3 grid-rows-4 place-items-center gap-y-2 md:grid-cols-5 md:gap-y-5 lg:gap-y-10">
      {showCard.map(card => (
        <div key={card.id}>
          <CardPattern
            cardId={card.id}
            flipped={card.flipped}
            flippedCardsHandler={flippedCardsHandler}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
          />
          <Card
            cardId={card.id}
            cardContent={card.content}
            flipped={card.flipped}
          />
        </div>
      ))}
    </section>
  )
}
