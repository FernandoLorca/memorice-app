import { useContext } from 'react'

import { NewCardsContext } from '../../context/NewCardsContext'

export default function ResetGameButton() {
  const { resetCardGame } = useContext(NewCardsContext)

  return (
    <section className="flex justify-center pt-10">
      <button
        className="text-xl bg-rose-500 px-5 py-2 rounded-2xl"
        onClick={() => resetCardGame()}
      >
        Reset Game
      </button>
    </section>
  )
}
