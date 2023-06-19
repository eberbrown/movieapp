import React from 'react'

export default function Button({children}) {
  return (
    <button className='w-64 text-xl bg-gradient-to-r from-blue-400 to-blue-700 p-3 rounded-lg m-2 font-medium text-white hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-400 hover:text-blue-900'>{children}</button>
  )
}
