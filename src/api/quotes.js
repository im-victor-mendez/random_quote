import { apiOptions, apiUrl } from ".";

export async function getQuote() {
    try {
        const response = await fetch(apiUrl, apiOptions);
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
        return error
    }
}

export function newQuote(setQuote, setAuthor) {
    getQuote()
    .then(res => {
      const { id, originator, language_code, content, url, tags } = res
      const { description, master_id, name } = originator
      const originatorId = originator.id,
            originatorLanguageCode = originator.language_code,
            originatorUrl = originator.url
        
      setQuote(content)
      setAuthor(name)
    })
}