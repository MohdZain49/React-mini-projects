import React from 'react'
import './App.css'
import data from './data'


function App() {
  const [selected, setSelected] = React.useState([])
  const [allowedMultiple, setAllowedMultiple] = React.useState(false)


  const handleSelection = (selectedId) => {
    if (allowedMultiple) {
      if (selected.includes(selectedId)) {
        setSelected((prev) => prev.filter((item) => item !== selectedId))
      } else {
        setSelected((prev) => [...prev, selectedId])
      }
    } else {
      if (selected.includes(selectedId)) {
        setSelected([])
      } else {
        setSelected([selectedId])
      }
    }
  }

  return (
    <div className="app">
      <div className='header'>
        <h1>Accordian</h1>
        <label htmlFor="allowedMultiple">Select multiple</label>
        <input
          type="checkbox"
          id="allowedMultiple"
          onChange={() => setAllowedMultiple((prev) => !prev)}
        />
      </div>
      <div className="accordians">
        {
          data.map((item) => {
            return (
              <div key={item.id} className="accordian-item">
                <div className="accordian-title" onClick={() => handleSelection(item.id)}>
                  <h3>{item.title}</h3>
                  <span>+</span>
                </div>
                {selected.includes(item.id) && <div className="accordian-info">{item.info}</div>}

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App