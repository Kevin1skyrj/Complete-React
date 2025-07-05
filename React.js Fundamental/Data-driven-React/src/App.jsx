import React from 'react'
import './App.css'
import { Phone, Mail } from 'lucide-react'
const App = () => {
  return (
    <div className='contacts pt-10 pb-15'>
      
      <article className='contact-card'>
        <img
          src ="/images/mr-whiskerson.png"
          alt="Mr. Whiskerson"
          />
        <h3>Mr. Whiskerson</h3>
        <div className='info-group'>
          <Phone className='w-5 h-5 text-blue-500' />
          <p>+91 99999 99999</p>
        </div>
        <div className='info-group'>
          <Mail className='w-5 h-5 text-green-500' />
          <p>mr.whiskerson@me.com</p>
        </div>
      </article>
      <article className='contact-card'>
        <img
          src ="/images/felix.png"
          alt="Mr. Felix"
          />
        <h3>Mr. Felix</h3>
        <div className='info-group'>
          <Phone className='w-5 h-5 text-blue-500' />
          <p>+91 99999 99999</p>
        </div>
        <div className='info-group'>
          <Mail className='w-5 h-5 text-green-500' />
          <p>felixn@me.com</p>
        </div>
      </article>
      <article className='contact-card'>
        <img
          src ="/images/fluffykins.png"
          alt="Mr. Fluffykins"
          />
        <h3>Mr. Fluffykins</h3>
        <div className='info-group'>
          <Phone className='w-5 h-5 text-blue-500' />
          <p>+91 99999 99999</p>
        </div>
        <div className='info-group'>
          <Mail className='w-5 h-5 text-green-500' />
          <p>fluffykins@me.com</p>
        </div>
      </article>
      <article className='contact-card'>
        <img
          src ="/images/mr-whiskerson.png"
          alt="Mr. Whiskerson"
          />
        <h3>Mr. Whiskerson</h3>
        <div className='info-group'>
          <Phone className='w-5 h-5 text-blue-500' />
          <p>+91 99999 99999</p>
        </div>
        <div className='info-group'>
          <Mail className='w-5 h-5 text-green-500' />
          <p>mr.whiskerson@me.com</p>
        </div>
      </article>
      <article className='contact-card'>
        <img
          src ="/images/pumpkin.png"
          alt="Mr. Pumpkin"
          />
        <h3>Mr. Pumpkin</h3>
        <div className='info-group'>
          <Phone className='w-5 h-5 text-blue-500' />
          <p>+91 99999 99999</p>
        </div>
        <div className='info-group'>
          <Mail className='w-5 h-5 text-green-500' />
          <p>pumpkin@me.com</p>
        </div>
      </article>
      <article className='contact-card'>
        <img
          src ="/images/mr-whiskerson.png"
          alt="Mr. Whiskerson"
          />
        <h3>Mr. Whiskerson</h3>
        <div className='info-group'>
          <Phone className='w-5 h-5 text-blue-500' />
          <p>+91 99999 99999</p>
        </div>
        <div className='info-group'>
          <Mail className='w-5 h-5 text-green-500' />
          <p>mr.whiskerson@me.com</p>
        </div>
      </article>
    </div>
  )
}

export default App