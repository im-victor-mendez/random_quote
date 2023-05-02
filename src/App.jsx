import { useEffect, useState } from "react"
import QuoteBox from "./layouts/QuoteBox/QuoteBox"
import { newQuote } from "./api/quotes"

function App() {
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()
  const settingNewQuote = () => newQuote(setQuote, setAuthor)

  useEffect(() => {
    settingNewQuote()
  }, [])

  return (
    <main id="App">
      <QuoteBox quote={quote} author={author} newQuote={settingNewQuote} />
    </main>
  )
}

export default App
