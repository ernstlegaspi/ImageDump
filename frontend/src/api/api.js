import axios from 'axios'

const url = "http://localhost:2217/image"

export const getImages = () => axios.get(`${url}/`)
export const addImage = imageData => axios.post(`${url}/`, imageData)