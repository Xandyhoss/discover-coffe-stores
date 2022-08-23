import { CircleDashed } from 'phosphor-react'

export default function Loading() {
  return (
    <div className="absolute min-h-screen w-full z-[21] bg-black bg-opacity-70 flex items-center justify-center">
      <CircleDashed size={50} className="animate-spin"/>
    </div>
  )
}
