import Creators from './components/Creators'

export default function Footer() {
  return (
    <div className="text-center py-10">
      <h3 className="text-xl mb-1">App by</h3>
      <Creators text="👦🏽Pedro" /> and <Creators text="🧔🏽‍♂️Fernando" />
    </div>
  )
}
