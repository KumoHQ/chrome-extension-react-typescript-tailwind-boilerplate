import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/global.css'
import './popup.css'

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1 className='text-red-500 text-xl'>Hello World</h1>
      <img src="icon.png" />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
