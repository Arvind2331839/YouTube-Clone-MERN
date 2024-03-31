import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        'X-RapidAPI-Key': 'd6bef587cemsh46fc42b3081de0fp1c30a4jsnbbdc54c87a08',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
