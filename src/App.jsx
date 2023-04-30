import { useEffect, useState } from "react";
import "./App.scss";
import React from 'react'
import QuoteBox from "./layouts/QuoteBox/QuoteBox"
import { getQuote } from "./api";
import { getColor } from "./functions/colors";

const twitterIntent = `https://twitter.com/intent/tweet?&text=`

function App() {
  const [color, setColor] = useState()
  const [quote, setQuote] = useState(null)
  const [tweet, setTweet] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => { return () => { newQuote() } }, [])

  function newQuote() {
      getQuote()
      .then(
          response => {
              const data = response.data
              if (!data) return

              const { content, originator } = data
              const { name } = originator

              const uriComponent = encodeURIComponent(`"${content}"\n${name}`)

              setError(false)
              setColor(getColor())
              setQuote(data)
              setTweet(`${twitterIntent}${uriComponent}`)
          }
      )
      .catch(
          error => {
              console.log(error)
              setError(true)
          }
      )
  }

  return (
    <main id="App" style={{ backgroundColor: color }}>
      <QuoteBox quote={quote} tweet={tweet} color={color} error={error} newQuote={newQuote} />
    </main>
  )
}

export default App
