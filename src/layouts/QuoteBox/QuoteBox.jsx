function QuoteBox({ quote, author, newQuote }) {
  const tweetIntent = `https://twitter.com/intent/tweet?`
  const uriComponent = encodeURIComponent(`"${quote}"\n  - ${author}`)
  const text = `text=${uriComponent}`
  const tweetUrl = `${tweetIntent}${text}`

  return (
    <section id='quote-box'>
        <p id='text'>{quote}</p>
        <h1 id='author'>{author}</h1>
        <div id='buttons'>
            <button id='new-quote' onClick={newQuote}>New Quote</button>
            <a id='tweet-quote' href={tweetUrl} target="_blank" rel="noreferrer">Tweet Quote!</a>
        </div>
    </section>
  )
}

export default QuoteBox