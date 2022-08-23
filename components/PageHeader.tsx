import { useContext } from 'react'
import { StoreContext } from '../contexts/storeContext'
import useTrackLocation from '../hooks/use-track-location'

type PropsType = {
  customLocation: Function
}

export default function PageHeader(props: PropsType) {
  const { state } = useContext(StoreContext)
  const { loading } = state

  const handleSearchButton = (): void => {
    props.customLocation()
  }
  return (
    <div className="flex flex-col justify-center items-center animate-enter">
      <h1 className="text-6xl font-bold text-center">
        <span className="text-blue-300">Coffee</span> Discover
      </h1>
      <p className="font-bold mt-2 font-roboto">
        discover coffee shops near you!
      </p>
      <button
        className="bg-blue-600 rounded-md p-2 mt-8 hover:bg-blue-400 hover:font-bold transition-all"
        onClick={handleSearchButton}
      >
        {loading ? 'loading' : 'search nearby stores'}
      </button>
    </div>
  )
}
