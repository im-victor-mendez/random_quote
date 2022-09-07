import './App.css'
import GetQuote from './features/GetQuote'

function App() {
  return (
    <div className="App">  
      <div id='Quote'>
        <p id='content'>Generate a quote! :D</p>
        <p id='author'></p>
        <p id='tag'></p>
        <button id='newQuote' onClick={GetQuote}>New Quote</button>
      </div>
    </div>
  )
}

export default App