import NewCardsContextProvider from './context/NewCardsContext'

import TitleApp from './components/TitleApp'
import CardGrid from './components/Card/CardGrid'
import Footer from './components/Footer/Footer'
import ResetGameButton from './components/ResetGameButton/ResetGameButton'

export default function MemoriceApp() {
  return (
    <>
      <TitleApp />
      <NewCardsContextProvider>
        <CardGrid />
        <ResetGameButton />
      </NewCardsContextProvider>
      <Footer />
    </>
  )
}
