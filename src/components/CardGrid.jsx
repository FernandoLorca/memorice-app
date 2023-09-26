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

  function flippedCardsHandler(id) {
    const updateCards = showCard.map(card => {
      if (card.id === id) {
        return {
          ...card,
          flipped: true,
        }
      } else {
        return {
          ...card,
        }
      }
    })
    setShowCard(updateCards)
  }

  function matchCheck() {
    const [firstIdCard, secondIdCard] = selectedCards

    let firstCard = showCard.filter(card => firstIdCard === card.id && card.id)
    let secondCard = showCard.filter(
      card => secondIdCard === card.id && card.id
    )

    setTimeout(() => {
      if (firstCard[0].content !== secondCard[0].content) {
        const updateCards = showCard.map(card => {
          return {
            ...card,
            flipped: false,
          }
        })
        setShowCard(updateCards)
        setSelectedCards([])
        return
      } else {
        const updateCards = showCard.map(card => {
          if (card.id === firstIdCard || card.id === secondIdCard) {
            return {
              ...card,
              matched: true,
            }
          } else {
            return {
              ...card,
            }
          }
        })
        setShowCard(updateCards)
        setSelectedCards([])
        return
      }
    }, 1000)
  }

  function selectedCardsLengthChecker(selectedCards) {
    if (selectedCards.length === 2) {
      matchCheck()
    }
  }

  useEffect(() => {
    selectedCardsLengthChecker(selectedCards)
  }, [selectedCards])

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
            cardMatched={card.matched}
          />
          <Card
            cardId={card.id}
            cardContent={card.content}
            flipped={card.flipped}
            cardMatched={card.matched}
          />
        </div>
      ))}
    </section>
  )
}
