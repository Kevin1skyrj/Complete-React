import React from 'react'
// import  {createElement} from 'react'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen'>
      <nav className='bg-black pb-2 pt-2'>
        <img src='/react.svg' alt='logo' className='size-16 pt-2 pb-2 ml-10'/>
       </nav>
       <main className='text-white text-center pt-20 '>
        <h1 className='text-4xl font-bold'>Fun facts about React</h1>
        <ul className='list-disc pt-10 list-outside text-2xl text-left max-w-2xl mx-auto pl-6'>
          <li>Was first release in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
          <li> React is a JavaScript library for building user interfaces</li>

        </ul>
       </main>
    </div>
       
      
    
  )
}

export default App