import { useState, useEffect } from "react"
import { getQuote } from "../../api"

function QuoteBox() {
    const [quote, setQuote] = useState(null)
    const [tweet, setTweet] = useState(null)

    const twitterIntent = `https://twitter.com/intent/tweet?&text=`

    useEffect(() => { return () => { newQuote() } }, [])
    

    function newQuote() {
        getQuote()
        .then(
            response => {
                const data = response.data
                setQuote(data)

                const uriComponent = encodeURIComponent(`"${data.content}"\n${data.originator.name}`)
                setTweet(`${twitterIntent}${uriComponent}`)
            }
        )
    }

    

  if (quote) return (
    <section id='quote-box'>
        <p id='text'>{quote.content}</p>
        <h1 id='author'>{quote.originator.name}</h1>
        <button id="new-quote" onClick={newQuote}>New Quote</button>
        <a id="tweet-quote" href={tweet} target="_blank" rel="noopener noreferrer">Tweet Quote!</a>
    </section>
  )
}

export default QuoteBox