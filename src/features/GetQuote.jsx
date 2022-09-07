const url = 'https://api.quotable.io/random'

function GetQuote() {
    fetch(url)
    .then(response => response.json())
    .then(
        d => {
            document.getElementById('content').innerText = d.content
            document.getElementById('author').innerText = d.author
            document.getElementById('tag').innerText = d.tags[0]
        }
    )
}

export default GetQuote