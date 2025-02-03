import { useState } from 'react';
import './App.css'
import { FaStar } from "react-icons/fa";

function App() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleOnclick = (currentIndex) => {
    if (currentIndex === rating) setRating(0)
    else setRating(currentIndex)
  }

  const handleOnHover = (currentIndex) => {
    setHover(currentIndex)
  }

  return (
    <div className='wrapper'>
      <h1>Stars Rating</h1>
      <div>
        {
          [...Array(10)].map((_, index) => {
            index++
            return (<FaStar
              key={index}
              className={index <= (hover || rating) ? 'active' : 'inactive'}
              onClick={() => handleOnclick(index)}
              onMouseEnter={() => handleOnHover(index)}
              onMouseLeave={() => handleOnHover(0)}
              size={40} />)
          })

        }
      </div>
    </div>
  )
}

export default App
