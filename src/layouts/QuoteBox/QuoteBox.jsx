import { useState, useEffect } from "react"
import { getQuote } from "../../api"

const twitterIntent = `https://twitter.com/intent/tweet?&text=`

function QuoteBox() {
    const [quote, setQuote] = useState(null)
    const [tweet, setTweet] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => { return () => { newQuote() } }, [])

    function newQuote() {
        getQuote()
        .then(
            response => {
                setError(false)
                if (!response.data) return

                const data = response.data
                const { content, originator } = data
                const { name } = originator

                const uriComponent = encodeURIComponent(`"${content}"\n${name}`)

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

    if (error) return (
        <section id="error">
            <h1>An error has occurred with API! <br />Please try again later</h1>
        </section>
    )

    if (quote) return (
        <section id='quote-box'>
            <p id='text'>{`"${quote.content}"`}</p>
            <h1 id='author'>{quote.originator.name}</h1>
            <button id="new-quote" onClick={newQuote}>New Quote</button>
            <a id="tweet-quote" href={tweet} target="_blank" rel="noopener noreferrer">Tweet Quote!</a>
        </section>
    )
}

export default QuoteBox