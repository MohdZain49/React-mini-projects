import { useEffect, useState } from 'react'
import './App.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
  const [images, setImages] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10')
        const data = await response.json()
        setImages(data)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  const handleChangeSlide = (direction) => {
    if (direction === 'left') {
      console.log(direction);

      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    } else {
      console.log(direction);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images])

  return (
    <div className="App">
      <span className='left-arrow arrow'>
        <FaChevronLeft onClick={() => handleChangeSlide('left')} />
      </span>
      {images.length > 0 && (
        <img src={images[currentImageIndex].download_url} alt={images[currentImageIndex].author} />
      )}
      <span className='right-arrow arrow'>
        <FaChevronRight onClick={() => handleChangeSlide('right')} />
      </span>
    </div>
  )
}

export default App