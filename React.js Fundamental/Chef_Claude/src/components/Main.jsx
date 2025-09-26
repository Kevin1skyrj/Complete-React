import React from 'react'

const Main = () => {
  return (
    <div>
        <form>
        <input type="text" placeholder='Search recipes...' className='border border-gray-300 rounded-md p-2 w-full max-w-md mx-auto mt-10 block'/>
        <button type="submit" className='mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition'>Search</button>
        
        </form>
    </div>
  )
}

export default Main