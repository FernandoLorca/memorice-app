import Creators from './components/Creators'

export default function Footer() {
  return (
    <div className="text-center py-10">
      <h3 className="text-xl pb-1">
        App by <Creators text="🧔🏽‍♂️Fernando" />{' '}
      </h3>
      {/* <Creators text="👦🏽Pedro" /> and */}
    </div>
  )
}
