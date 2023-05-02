import { useEffect, useState } from "react"
import QuoteBox from "./layouts/QuoteBox/QuoteBox"
import { newQuote } from "./api/quotes"

function App() {
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()
  const newQuoteFunction = () => newQuote(setQuote, setAuthor)

  useEffect(() => {
    newQuoteFunction()
  }, [])

  return (
    <main id="App">
      <QuoteBox quote={quote} author={author} newQuote={newQuoteFunction} />
    </main>
  )
}

export default App
