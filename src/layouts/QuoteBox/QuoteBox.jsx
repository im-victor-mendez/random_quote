import { newQuote } from "../../api/quotes"

function QuoteBox({ quote, author, newQuote }) {
  return (
    <section id='quote-box'>
        <p id='text'>{quote}</p>
        <h1 id='author'>{author}</h1>
        <div id='buttons'>
            <button id='new-quote' onClick={newQuote}>New Quote</button>
            <a id='tweet-quote' href="twitter.com/intent/tweet">tweet-quote</a>
        </div>
    </section>
  )
}

export default QuoteBox