import axios from "axios";

const url = 'https://quotes15.p.rapidapi.com/quotes/random/'

const apiKey = import.meta.env.VITE_API_KEY
const apiHost = import.meta.env.VITE_API_HOST

const headers = {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': apiHost
  }

const options = { method: 'GET', url, headers }

export async function getQuote() {
    try {
        const response = await axios.request(options);
        return response
    } catch (error) {
        return error
    }
}