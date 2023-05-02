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