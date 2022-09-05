
import { useState } from 'react';
import './App.css';
import db from './db.json'

function App() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected == i) {
      return selected(null)
    }
    setSelected(i)
  }

  return (
    <div className="wrapper ">
      <div className='accordian'>
        {db.map((item, i) => {
          return (
            <div className='item'>
              <div className='title' onClick={() => toggle(i)}>
                <h2>{item.name}</h2>
                <span>{selected === i ? 'v' : '>'}</span>
              </div>

              <div className={selected === i ? 'content show' : 'content'}>
                {item.tweets.map((item, i) => {
                  return (
                    <div><li>{item}</li></div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}


export default App;
