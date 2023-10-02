interface Props {
  cardId: string
  flippedCardsHandler: (cardId: string) => void
  selectedCards: string[]
  setSelectedCards: (cards: string[]) => void
  flipped: boolean
  cardMatched: boolean
}

export default function CardPattern({
  cardId,
  flippedCardsHandler,
  selectedCards,
  setSelectedCards,
  flipped,
  cardMatched,
}: Props): JSX.Element {
  return (
    <div
      className={`w-32 h-40 border-2 rounded-md border-gray-900 cursor-pointer ${
        cardMatched ? 'matched bg-gray-950' : 'cardPattern'
      } ${flipped ? 'hidden' : 'flex'}`}
      onClick={() => {
        setSelectedCards([...selectedCards, cardId])
        flippedCardsHandler(cardId)
      }}
    ></div>
  )
}
