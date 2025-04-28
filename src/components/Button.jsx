import React from 'react'
import { useFormStatus } from 'react-dom'

const Button = () => {
    const { pending } = useFormStatus();
  return (
    <button disabled={pending} className='bg-purple-400 hover:bg-purple-700 text-white w-44 font-bold py-2 px-4 mt-4 rounded-md cursor-pointer'>
        {pending ? "Loading..." : "Submit"}
    </button>
  )
}

export default Button
