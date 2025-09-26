import React from 'react'

const Main = () => {
  return (
    <div>
        <form className='flex justify-center items-center mt-10 gap-2'>
        <input type="text" placeholder='Search recipes...' className='border border-gray-300 rounded-md p-2 flex-1 max-w-md'/>
        <button type="submit" className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition'>Search</button>
        
        </form>
    </div>
  )
}

export default Main