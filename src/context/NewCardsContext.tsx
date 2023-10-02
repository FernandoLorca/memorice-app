import uuid4 from 'uuid4'
import { createContext, useState } from 'react'
import cardJson from '../cards/cards.json'

// Define the type of the card object
interface Card {
  id: string
  flipped: boolean
  matched: boolean
  title: string
  content: string
}

// Define the type of the context
interface ContextType {
  newCards: () => Card[]
  showCard: Card[]
  setShowCard: (cards: Card[]) => void
  selectedCards: string[]
  setSelectedCards: (cards: string[]) => void
  resetCardGame: () => void
}

// Create a provider for the context
interface Props {
  children: React.ReactNode
}

// Create context with a initial value
export const NewCardsContext = createContext<ContextType>({
  newCards: () => [],
  showCard: [],
  setShowCard: () => {},
  selectedCards: [],
  setSelectedCards: () => {},
  resetCardGame: () => {},
})

export default function NewCardsContextProvider({
  children,
}: Props): JSX.Element {
  function newCards(): Card[] {
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
  const [showCard, setShowCard] = useState<Card[]>(newCards)
  const [selectedCards, setSelectedCards] = useState<string[]>([])

  const resetCardGame = () => setShowCard(newCards())

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
