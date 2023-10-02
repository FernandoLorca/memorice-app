interface Props {
  text: string
}

export default function Creators({ text }: Props) {
  return <span className="text-2xl font-bold text-rose-500">{text}</span>
}
