/* This example requires Tailwind CSS v2.0+ */
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'

export default function CircularButton(props) {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={props.onClick}
      >
        <PlusSmIconOutline className="h-6 w-6" aria-hidden="true" />
      </button>
    </>
  )
}