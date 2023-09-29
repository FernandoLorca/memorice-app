import uuid4 from 'uuid4'
import { createContext, useState } from 'react'
import cardJson from '../cards/cards.json'

export const NewCardsContext = createContext()

export default function NewCardsContextProvider({ children }) {
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

  const resetCardGame = () => setShowCard(newCards)

  return (
    <NewCardsContext.Provider
      value={{
        newCards,
        showCard,
        setShowCard,
        selectedCards,
        setSelectedCards,
        resetCardGame,
      }}
    >
      {children}
    </NewCardsContext.Provider>
  )
}
