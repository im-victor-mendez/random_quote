const apiKey = import.meta.env.VITE_API_KEY
const apiHost = import.meta.env.VITE_API_HOST

const prefixUrl = `https://${apiHost}/`
const apiEndpoint = `quotes/random/`
export const apiUrl = `${prefixUrl}${apiEndpoint}`

const headers = {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': apiHost
}

export const apiOptions = {
	method: 'GET',
	headers
}