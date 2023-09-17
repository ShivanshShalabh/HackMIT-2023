import fetch from 'node-fetch';

// Define the API endpoint
const apiUrl = 'https://api.meaningcloud.com/summarization-1.0';

// Define your API key
const apiKey = process.env.MEANINGCLOUD_API_KEY

const summarizeText = async (text) => {
    const formData = new FormData();
    formData.append('key', apiKey);
    formData.append('txt', text); 
    formData.append('limit', '50');
    const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
    });
    const data = await response.json();
    return data.summary;
};

export default summarizeText;