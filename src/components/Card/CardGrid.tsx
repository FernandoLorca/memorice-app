import { useEffect, useContext } from 'react'

import { NewCardsContext } from '../../context/NewCardsContext'

import Card from './components/Card'
import CardPattern from './components/CardPattern'

export default function CardGrid() {
  const { showCard, setShowCard, selectedCards, setSelectedCards, string } =
    useContext(NewCardsContext)

  function flippedCardsHandler(id) {
    const updateCards = showCard.map(card => {
      if (card.id === id && selectedCards.length < 2) {
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

  const selectedCardsLengthChecker = selectedCards =>
    selectedCards.length === 2 && matchCheck()

  useEffect(() => {
    selectedCardsLengthChecker(selectedCards)
  }, [selectedCards])

  return (
    <section className="grid grid-cols-3 px-3 grid-rows-4 place-items-center gap-y-2 md:grid-cols-5 md:gap-y-5 lg:gap-y-8 lg:px-32">
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
