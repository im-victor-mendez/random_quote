import './App.scss'
import { useEffect, useState } from "react"
import QuoteBox from "./layouts/QuoteBox/QuoteBox"
import { newQuote } from "./api/quotes"
import { getRandomColor } from './constants/colors'
import ReactLoading from "react-loading";

function App() {
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()
  const [color, setColor] = useState()
  const settingNewQuote = () => newQuote({ setQuote, setAuthor, setColor })

  useEffect(() => {
    setColor(getRandomColor())
    settingNewQuote()
  }, [])

  const style = {
    backgroundColor: color,
    color
  }

  return (
    <main id="App" style={style} >
      {
        quote ?
        <QuoteBox
          quote={quote}
          author={author}
          newQuote={settingNewQuote}
          color={color}
        /> :
        <ReactLoading
          color='#fff'
          type='spin'
        />
      }
    </main>
  )
}

export default App
