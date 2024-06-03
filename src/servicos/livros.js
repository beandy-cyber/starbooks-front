import axios from "axios"

const livrosAPI = axios.create({baseURL: "https://starbooks-server.onrender.com"})

async function getLivros() {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getLivros
}
