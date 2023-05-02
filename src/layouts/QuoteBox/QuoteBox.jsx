import './QuoteBox.scss'

function QuoteBox({ quote, author, newQuote, color }) {
  const tweetIntent = `https://twitter.com/intent/tweet?`
  const uriComponent = encodeURIComponent(`"${quote}"\n  - ${author}`)
  const text = `text=${uriComponent}`
  const tweetUrl = `${tweetIntent}${text}`

  const buttonStyle = {
    backgroundColor: color
  }

  const shareStyle = {
    color
  }

  function shareTweet() {
    window.open(tweetUrl, '_blank')
  }

  return (
    <section id='quote-box'>
        <p id='text'>{`"${quote}`}</p>
        <h1 id='author'>{`- ${author}`}</h1>
        <div id='buttons'>
            <button id='new-quote' onClick={newQuote} style={buttonStyle}>New Quote</button>
            <button id='share' onClick={shareTweet} >
              <i className='material-symbols-outlined' style={shareStyle}>Share</i>
              <a id='tweet-quote' href={tweetUrl} target="_blank" rel="noreferrer" style={shareStyle}>Tweet Quote!</a>
            </button>
        </div>
    </section>
  )
}

export default QuoteBox