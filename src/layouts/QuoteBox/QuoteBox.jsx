import './QuoteBox.scss'

function QuoteBox({ quote, tweet, color, error, newQuote }) {
    if (error) return (
        <section id="error">
            <h1>An error has occurred with API! <br />Please try again later</h1>
        </section>
    )

    if (quote) {
        const { content, originator } = quote
        const { name } = originator
        return (
            <section id='quote-box' style={{ color }}>
                <p id='text'>{`"${content}`}</p>
                <h1 id='author'>{`- ${name}`}</h1>

                <div id='buttons'>
                    <a id="tweet-quote" href={tweet} target="_blank" rel="noopener noreferrer" style={{ color }}>Tweet Quote!</a>
                    <button id="new-quote" onClick={newQuote} style={{ backgroundColor: color }}>New Quote</button>
                </div>
            </section>
        )
}
}

export default QuoteBox